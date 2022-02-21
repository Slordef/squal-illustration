import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'

export const routeSettings: ApiRoute[] = [
    ['GET', '/api/settings', Actions.getSettings]
]
