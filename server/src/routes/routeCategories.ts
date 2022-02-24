import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'
import { checkAdmin } from '../middleware/checkAdmin'

export const routeCategories: ApiRoute[] = [
    ['GET', '/api/categories', Actions.getCategories],
    ['POST', '/api/categories', Actions.postCategory, [checkAdmin]],
    ['PUT', '/api/categories', Actions.putCategory, [checkAdmin]],
    ['DELETE', '/api/categories', Actions.deleteCategory, [checkAdmin]]
]
