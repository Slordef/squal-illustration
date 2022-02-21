import { getCategories, setCategories } from '../data/categories'
import { ApiRequest } from '../interfaces/ApiRoute'

export async function putCategory(request: ApiRequest) {
    const categories = getCategories()
    const category = request.body.category
    if (category && category.index){
        const cat = categories.find(c => c.index == category.index)
        if (cat) {
            cat.name = category.name
            cat.images = category.images
            setCategories(categories)
        }
    }
    return categories
}
