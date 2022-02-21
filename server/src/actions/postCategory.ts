import { ApiRequest } from '../interfaces/ApiRoute'
import { getDataCategories, setDataCategories } from '../data/categories'

export async function postCategory(request: ApiRequest) {
    const categories = getDataCategories()
    const category = request.body.category
    if (category && category.index){
        const cat = categories.find(c => c.name == category.name)
        if (!cat) {
            categories.push(category)
            setDataCategories(categories)
        }
    }
    return categories
}
