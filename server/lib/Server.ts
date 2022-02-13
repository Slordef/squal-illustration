import fastify, { FastifyInstance, RouteOptions } from 'fastify'
import fastifyIO from 'fastify-socket.io'

export class Server {
    private app: FastifyInstance

    constructor(private port: number) {
        this.app = fastify()
        this.app.register(fastifyIO)
    }

    addApiRoute (route: RouteOptions) {
        this.app.route(route)
    }

    listen () {
        return new Promise<void>(resolve => {
            this.app.listen(this.port, () => {
                this.app.io.on('connection', (socket) => {

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
