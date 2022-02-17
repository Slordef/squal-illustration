import { getData } from '../lib/Data'
import { Image } from '../interfaces/image'

export async function returnImages() {
    const images = getData<Image[]>('images')
    return images
}
