import { Server } from './Server'
import { Router } from './Router'

export class Application {
    constructor(private apiServer: Server) {}

    setRouter (router: Router) {
        router.apply(this.apiServer)
    }

    run () {
        return this.apiServer.listen()
    }

    stop () {
        return this.apiServer.close()
    }
}
