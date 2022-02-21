import { getVueClient } from './getVueClient'
import { getVueAdmin } from './getVueAdmin'
import { getSettings } from './getSettings'
import { getCategories } from './getCategories'
import { getImages } from './getImages'
import { putCategory } from './putCategory'
import { postCategory } from './postCategory'
import { deleteCategory } from './deleteCategory'

export const Actions = {
    getVueClient,
    getVueAdmin,


    getCategories,
    postCategory,
    putCategory,
    deleteCategory,

    getImages,

    getSettings,
}
