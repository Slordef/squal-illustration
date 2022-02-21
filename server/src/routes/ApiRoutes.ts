import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'
import { routeCategories } from './routeCategories'
import { routeSettings } from './routeSettings'
import { routeImages } from './routeImages'

export const apiRoutes: ApiRoute[] = [
    ['GET', '/', Actions.getVueClient],
    ['GET', '/admin', Actions.getVueAdmin],
    ...routeCategories,
    ...routeSettings,
    ...routeImages
]
