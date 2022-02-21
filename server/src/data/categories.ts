import { getData, setData } from '../lib/Data'
import { Category } from '../interfaces/category'

export function getCategories () {
    return getData<Category[]>('categories') || []
}

export function setCategories (data: Category[]) {
    setData('categories', data)
}
