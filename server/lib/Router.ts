import { Server } from './Server'
import { ApiRoute } from '../interfaces/ApiRoute'
import { SocketRoute } from '../interfaces/SocketRoute'

export class Router {
    constructor(private apiRoutes: ApiRoute[], private socketRoutes: SocketRoute[]) {}

    apply (server: Server) {
        this.apiRoutes.forEach(route => server.addApiRoute({ method: route[0], url: route[1], handler: route[2] }))
        this.socketRoutes.forEach(route => server.addSocketRoute(route))
    }
}
