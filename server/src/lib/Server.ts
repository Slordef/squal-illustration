import fastify, { FastifyInstance, RouteOptions } from 'fastify'
import fastifyIO from 'fastify-socket.io'
import fastifyCors from 'fastify-cors'
import { socketRoutes } from '../routes/SocketRoutes'
import fastifyStatic from 'fastify-static'
import * as path from 'path'
import * as process from 'process'

export class Server {
    private app: FastifyInstance

    constructor(private port: number) {
        this.app = fastify()
        this.app.register(fastifyIO)
        this.app.register(fastifyCors, {
            origin: (origin, callback) => {
                callback(null, true)
            }
        })
        this.app.register(fastifyStatic, {
            root: path.resolve(process.cwd(), '..', 'vue'),
            prefix: '/',
            decorateReply: false
        })
        this.app.register(fastifyStatic, {
            root: path.resolve(process.cwd(), '..', 'assets'),
            prefix: '/web/',
            decorateReply: false
        })
    }

    addApiRoute (route: RouteOptions) {
        this.app.route(route)
    }

    listen () {
        return new Promise<void>(resolve => {
            this.app.listen(this.port, () => {
                this.app.io.on('connection', (socket) => {
                    socketRoutes(socket)
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
