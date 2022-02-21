import { ApiRequest } from '../interfaces/ApiRoute'
import { getCategories, setCategories } from '../data/categories'

export function postCategory(request: ApiRequest) {
    const categories = getCategories()
    const category = request.body.category
    if (category && category.index){
        const cat = categories.find(c => c.name == category.name)
        if (!cat) {
            categories.push(category)
            setCategories(categories)
        }
    }
    return categories
}
