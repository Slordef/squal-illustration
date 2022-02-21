import { getData, setData } from '../lib/Data'
import { Image } from '../interfaces/image'

export function getDataImages () {
    return getData<Image[]>('images') || []
}

export function setDataImages (data: Image[]) {
    setData('images', data)
}
