import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'
import { routeCategories } from './routeCategories'
import { routeSettings } from './routeSettings'
import { routeImages } from './routeImages'

export const apiRoutes: ApiRoute[] = [
    ['GET', '/', Actions.returnVueClient],
    ['GET', '/admin', Actions.returnVueAdmin],
    ['POST', '/admin/connection', Actions.returnConnection],
    ['POST', '/admin/add', Actions.postAdmin],
    ...routeCategories,
    ...routeSettings,
    ...routeImages
]
