import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'
import { routeCategories } from './routeCategories'
import { routeSettings } from './routeSettings'
import { routeImages } from './routeImages'

export const apiRoutes: ApiRoute[] = [
    ['GET', '/', Actions.returnVueClient],
    ['GET', '/api/image/home', Actions.returnHomeImage],
    ['POST', '/api/contact', Actions.returnContact],
    ['GET', '/admin', Actions.returnVueAdmin],
    ['GET', '/admin/addadmin', Actions.returnVueAdmin],
    ['POST', '/admin/connection', Actions.returnConnection],
    ['POST', '/admin/add', Actions.postAdmin],
    ['PUT', '/admin/update', Actions.putAdmin],
    ['GET', '/admin/*', Actions.returnVueAdmin],
    ...routeCategories,
    ...routeSettings,
    ...routeImages,
    ['GET', '/*', Actions.returnVueClient]
]
