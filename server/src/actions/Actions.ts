import { returnVueClient } from './returnVueClient'
import { returnVueAdmin } from './returnVueAdmin'
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
