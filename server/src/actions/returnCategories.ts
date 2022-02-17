import { getData } from '../lib/Data'
import { Category } from '../interfaces/category'

export async function returnCategories() {
    const categories = getData<Category[]>('categories')
    return categories
}
