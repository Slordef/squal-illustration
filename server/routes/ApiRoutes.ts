import { ApiRoute } from '../interfaces/ApiRoute'

export const apiRoutes: ApiRoute[] = [
    ['GET', '/', async () => { return 'Hello' }]
]
