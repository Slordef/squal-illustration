import { Image } from '../interfaces/image'

export function randomImageID(images: Image[]) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')
    let id = ''
    do {
        id = ''
        for (let n = 0; n < 8; n++) {
            id += chars[Math.floor(Math.random() * chars.length)]
        }
    } while (images.find(i => i.id === id))
    return ''
}
