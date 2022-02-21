import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'

export const routeImages: ApiRoute[] = [
    ['GET', '/api/images', Actions.getImages],
    ['POST', '/api/images', Actions.postImage],
    ['PUT', '/api/images', Actions.putImage],
    ['DELETE', '/api/images', Actions.deleteImage]
]
