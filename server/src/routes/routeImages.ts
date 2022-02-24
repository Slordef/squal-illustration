import { ApiRoute } from '../interfaces/ApiRoute'
import { Actions } from '../actions/Actions'
import { checkAdmin } from '../middleware/checkAdmin'

export const routeImages: ApiRoute[] = [
    ['GET', '/api/images', Actions.getImages],
    ['POST', '/api/images', Actions.postImage, [checkAdmin]],
    ['PUT', '/api/images', Actions.putImage, [checkAdmin]],
    ['DELETE', '/api/images', Actions.deleteImage, [checkAdmin]]
]
