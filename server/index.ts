import { Application } from './lib/Application'
import { Server } from './lib/Server'
import { Router } from './lib/Router'
import { apiRoutes } from './routes/ApiRoutes'
import { socketRoutes } from './routes/SocketRoutes'

const application = new Application(new Server(3000))
application.setRouter(new Router(apiRoutes, socketRoutes))
application.run()
