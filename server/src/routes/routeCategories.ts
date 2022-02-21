import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'

export const routeCategories: ApiRoute[] = [
    ['GET', '/api/categories', Actions.getCategories],
    ['POST', '/api/categories', Actions.getCategories],
    ['PUT', '/api/categories', Actions.getCategories],
    ['DELETE', '/api/categories', Actions.getCategories]
]
