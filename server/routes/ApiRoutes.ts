import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'

export const apiRoutes: ApiRoute[] = [
    ['GET', '/', Actions.returnHello]
]
