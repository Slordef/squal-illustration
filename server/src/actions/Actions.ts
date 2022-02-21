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

export const Actions = {
    returnVueClient,
    returnVueAdmin,


    getCategories,
    postCategory,
    putCategory,
    deleteCategory,

    getImages,
    postImage,
    putImage,
    deleteImage,

    getSettings,
}
