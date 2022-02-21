import { getVueClient } from './getVueClient'
import { getVueAdmin } from './getVueAdmin'
import { getCategories } from './getCategories'
import { putCategory } from './putCategory'
import { postCategory } from './postCategory'
import { deleteCategory } from './deleteCategory'
import { getImages } from './getImages'
import { postImage } from './postImage'
import { putImage } from './putImage'
import { deleteImage } from './deleteImage'
import { getSettings } from './getSettings'

export const Actions = {
    getVueClient,
    getVueAdmin,


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
