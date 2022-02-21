import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'

export const routeCategories: ApiRoute[] = [
    ['GET', '/api/categories', Actions.getCategories],
    ['POST', '/api/categories', Actions.postCategory],
    ['PUT', '/api/categories', Actions.putCategory],
    ['DELETE', '/api/categories', Actions.deleteCategory]
]
