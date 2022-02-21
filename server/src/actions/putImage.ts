import { ApiRequest } from '../interfaces/ApiRoute'
import { getImages, setImages } from '../data/images'

export async function putImage(request: ApiRequest) {
    const images = getImages()
    const image = request.body.image
    if (image && image.id){
        const cat = images.find(c => c.id == image.id)
        if (cat) {
            cat.name = image.name
            cat.description = image.description
            cat.link = image.link
            setImages(images)
        }
    }
    return images
}
