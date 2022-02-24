import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'
import { checkAdmin } from '../middleware/checkAdmin'

export const routeSettings: ApiRoute[] = [
    ['GET', '/api/settings', Actions.getSettings],
    ['PUT', '/api/settings', Actions.putSettings, [checkAdmin]]
]
