import { Application } from './lib/Application'
import { Server } from './lib/Server'
import { Router } from './lib/Router'
import { apiRoutes } from './routes/ApiRoutes'

const port = parseInt(process.env.PORT || '3000')
const host = process.env.HOST || '127.0.0.1'

const application = new Application(new Server(port, host))
application.setRouter(new Router(apiRoutes))
application.run()
