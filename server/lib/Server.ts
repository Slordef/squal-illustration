import fastify, { FastifyInstance, RouteOptions } from 'fastify'
import fastifyIO from 'fastify-socket.io'
import { SocketRoute } from '../interfaces/SocketRoute'

export class Server {
    private app: FastifyInstance
    private socketRoutes: SocketRoute[] = []

    constructor(private port: number) {
        this.app = fastify()
        this.app.register(fastifyIO)
    }

    addApiRoute (route: RouteOptions) {
        this.app.route(route)
    }

    addSocketRoute (route: SocketRoute) {
        this.socketRoutes.push(route)
    }

    listen () {
        return new Promise<void>(resolve => {
            this.app.listen(this.port, () => {
                this.app.io.on('connection', (socket) => {
                    this.socketRoutes.forEach(route => {
                        socket.on(route[0], route[1])
                    })
                })
                console.log(`Server listen on port : ${this.port}`)
                resolve()
            })
        })
    }

    close() {
        return this.app.close()
    }
}
