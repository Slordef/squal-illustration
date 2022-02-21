import { ApiRequest } from '../interfaces/ApiRoute'
import { FastifyReply } from 'fastify'
import { getDataImages, setDataImages } from '../data/images'

export async function deleteImage(request: ApiRequest, reply: FastifyReply) {
    const id = request.body.id
    if (!id) return reply.code(404)
    const images = getDataImages()
    const index = images.findIndex(c => c.id === id)
    const category = images[index]
    images.splice(index, 1)
    setDataImages(images)
    return category
}
