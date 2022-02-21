import { ApiRoute } from '../src/interfaces/ApiRoute'
import axios, { AxiosResponse } from 'axios'
import { Application } from '../src/lib/Application'
import { Server } from '../src/lib/Server'
import { Router } from '../src/lib/Router'

export function testRouteApplication(port = 3030, routes: ApiRoute[], route: {method: string, path: string}, tests: (response: AxiosResponse) => void) {
    return function (done) {
        const application = new Application(new Server(port))
        application.setRouter(new Router(routes))
        application.run().then(() => {
            axios[route.method](`http://localhost:${port}${route.path}`).then(response => {
                tests(response)
                application.stop().then(() => {
                    done()
                })
            })
        })
    }
}
