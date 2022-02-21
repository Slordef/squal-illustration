import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'
import { routeCategories } from './routeCategories'

export const apiRoutes: ApiRoute[] = [
    ['GET', '/', Actions.getVueClient],
    ['GET', '/admin', Actions.getVueAdmin],

    ...routeCategories
]
