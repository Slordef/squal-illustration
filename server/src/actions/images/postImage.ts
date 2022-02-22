import { ApiRequest } from '../../interfaces/ApiRoute'
import { getDataImages, setDataImages } from '../../data/images'
import { saveFile } from '../../files/file'
import { randomImageID } from '../../utils/randomImageID'

export async function postImage(request: ApiRequest) {
    const files = await request.files()
    const images = getDataImages()
    for await (const file of files) {
        console.log(file)
        const result = await saveFile(file)
        images.push({
            id: randomImageID(images),
            name: result.name,
            description: '',
            link: result.name,
            category: 0
        })
    }
    setDataImages(images)
    return images
}
