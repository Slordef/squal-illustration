import { Server } from './Server'
import { ApiRoute } from '../interfaces/ApiRoute'

export class Router {
    constructor(private apiRoutes: ApiRoute[]) {}

    apply (server: Server) {
        this.apiRoutes.forEach(route => server.addApiRoute({ method: route[0], url: route[1], handler: route[2] }))
    }
}
