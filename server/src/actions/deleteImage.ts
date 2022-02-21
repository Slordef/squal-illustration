import { ApiRequest } from '../interfaces/ApiRoute'
import { FastifyReply } from 'fastify'
import { getImages, setImages } from '../data/images'

export function deleteImage(request: ApiRequest, reply: FastifyReply) {
    const id = request.body.id
    if (!id) return reply.code(404)
    const images = getImages()
    const index = images.findIndex(c => c.id === id)
    const category = images[index]
    images.splice(index, 1)
    setImages(images)
    return category
}
