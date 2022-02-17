import { socketLogin } from './socketLogin'
import { socketToken } from './socketToken'
import { returnVueClient } from './returnVueClient'
import { returnVueAdmin } from './returnVueAdmin'
import { returnSettings } from './returnSettings'
import { returnCategories } from './returnCategories'
import { returnImages } from './returnImages'

export const Actions = {
    returnVueClient,
    returnVueAdmin,
    returnSettings,
    returnCategories,
    returnImages,
    socketLogin,
    socketToken
}
