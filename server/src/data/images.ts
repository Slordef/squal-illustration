import { getData, setData } from '../lib/Data'
import { Image } from '../interfaces/image'

export function getImages () {
    return getData<Image[]>('images') || []
}

export function setImages (data: Image[]) {
    setData('images', data)
}
