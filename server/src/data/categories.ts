import { getData, setData } from '../lib/Data'
import { Category } from '../interfaces/category'

export function getDataCategories () {
    return getData<Category[]>('categories') || []
}

export function setDataCategories (data: Category[]) {
    setData('categories', data)
}
