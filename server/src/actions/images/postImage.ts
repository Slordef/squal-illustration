import { ApiRequest } from '../../interfaces/ApiRoute'
import { setDataImages, getDataImages } from '../../data/images'

export async function postImage(request: ApiRequest) {
    const files = request.raw.files
    console.log(files)
    const images = getDataImages()
    const image = request.body.image
    if (image && image.id){
        const cat = images.find(c => c.name == image.name)
        if (!cat) {
            images.push(image)
            setDataImages(images)
        }
    }
    return images
}
