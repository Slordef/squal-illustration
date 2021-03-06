import { returnVueClient } from './returnVueClient'
import { returnVueAdmin } from './returnVueAdmin'
import { getCategories } from './categories/getCategories'
import { putCategory } from './categories/putCategory'
import { postCategory } from './categories/postCategory'
import { deleteCategory } from './categories/deleteCategory'
import { getImages } from './images/getImages'
import { postImage } from './images/postImage'
import { putImage } from './images/putImage'
import { deleteImage } from './images/deleteImage'
import { getSettings } from './settings/getSettings'
import { returnConnection } from './connection/returnConnection'
import { postAdmin } from './connection/postAdmin'
import { putAdmin } from './connection/putAdmin'
import { putSettings } from './settings/putSettings'
import { returnContact } from './returnContact'
import { returnHomeImage } from './returnHomeImage'

export const Actions = {
    returnVueClient,
    returnVueAdmin,
    returnContact,
    returnHomeImage,

    returnConnection,
    postAdmin,
    putAdmin,

    getCategories,
    postCategory,
    putCategory,
    deleteCategory,

    getImages,
    postImage,
    putImage,
    deleteImage,

    getSettings,
    putSettings
}
