import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'

export const routeImages: ApiRoute[] = [
    ['GET', '/api/images', Actions.getImages]
]
