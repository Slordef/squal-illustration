import { getDataCategories, setDataCategories } from '../data/categories'
import { ApiRequest } from '../interfaces/ApiRoute'

export async function putCategory(request: ApiRequest) {
    const categories = getDataCategories()
    const category = request.body.category
    if (category && category.index){
        const cat = categories.find(c => c.index == category.index)
        if (cat) {
            cat.name = category.name
            cat.images = category.images
            setDataCategories(categories)
        }
    }
    return categories
}
