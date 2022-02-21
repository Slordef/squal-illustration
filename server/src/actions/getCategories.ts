import { getData } from '../lib/Data'
import { Category } from '../interfaces/category'

export async function getCategories() {
    return getData<Category[]>('categories')
}
