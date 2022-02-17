import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'

export const apiRoutes: ApiRoute[] = [
    ['GET', '/', Actions.returnVueClient],
    ['GET', '/admin', Actions.returnVueAdmin],
    ['GET', '/api/settings', Actions.returnSettings],
    ['GET', '/api/categories', Actions.returnCategories],
    ['GET', '/api/images', Actions.returnImages]
]
