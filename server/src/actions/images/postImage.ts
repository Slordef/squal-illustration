import { ApiRequest } from '../../interfaces/ApiRoute'
import { getDataImages, setDataImages } from '../../data/images'
import { saveFile } from '../../files/file'
import { randomImageID } from '../../utils/randomImageID'

export async function postImage(request: ApiRequest) {
    console.log(await request.files())
    const files = await request.files()
    const images = getDataImages()
    for await (const file of files) {
        const name = await saveFile(file)
        images.push({
            id: randomImageID(images),
            name,
            description: '',
            link: name,
            category: 0
        })
    }
    setDataImages(images)
    return images
}
