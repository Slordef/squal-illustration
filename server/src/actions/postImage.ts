import { ApiRequest } from '../interfaces/ApiRoute'
import { setImages, getImages } from '../data/images'

export function postImage(request: ApiRequest) {
    const images = getImages()
    const image = request.body.image
    if (image && image.id){
        const cat = images.find(c => c.name == image.name)
        if (!cat) {
            images.push(image)
            setImages(images)
        }
    }
    return images
}
