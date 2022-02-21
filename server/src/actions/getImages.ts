import { getData } from '../lib/Data'
import { Image } from '../interfaces/image'

export async function getImages() {
    return getData<Image[]>('images')
}
