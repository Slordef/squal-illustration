import fastify, { FastifyInstance } from 'fastify'
import fastifyCors from 'fastify-cors'
import fastifyStatic from 'fastify-static'
import * as path from 'path'
import * as process from 'process'
import { Raw, Route } from '../interfaces/ApiRoute'
import * as http from 'http'
import fastifyMultipart from 'fastify-multipart'

export class Server {
    private app: FastifyInstance<http.Server, Raw>

    constructor(private port: number, private host: string) {
        this.app = fastify()
        this.app.register(fastifyCors, {
            origin: (origin, callback) => {
                callback(null, true)
            }
        })
        this.registerStatic(path.resolve(process.cwd(), 'vue', 'js'), '/js/')
        this.registerStatic(path.resolve(process.cwd(), 'vue', 'js'), '/admin/js/')
        this.registerStatic(path.resolve(process.cwd(), 'vue', 'css'), '/css/')
        this.registerStatic(path.resolve(process.cwd(), 'vue', 'css'), '/admin/css/')
        this.registerStatic(path.resolve(process.cwd(), 'vue', 'fonts'), '/fonts/')
        this.registerStatic(path.resolve(process.cwd(), 'vue', 'img'), '/img/')
        this.registerStatic(path.resolve(process.cwd(), '..', 'assets'), '/web/')
        this.app.register(fastifyMultipart, {
            limits: { fileSize: 5 * 1024 * 1024 }
        })
    }

    registerStatic (path: string, prefix: string) {
        this.app.register(fastifyStatic, {
            root: path,
            prefix: prefix,
            decorateReply: false
        })
    }

    addApiRoute (route: Route) {
        this.app.route(route)
    }

    listen () {
        return new Promise<void>(resolve => {
            this.app.listen(this.port, this.host, () => {
                console.log(`Server listen on port : ${this.port}`)
                resolve()
            })
        })
    }

    close() {
        return this.app.close()
    }
}
