import { ApiRequest } from '../../interfaces/ApiRoute'
import { FastifyReply } from 'fastify'
import { getDataImages, setDataImages } from '../../data/images'
import { deleteFile } from '../../files/file'

export async function deleteImage(request: ApiRequest, reply: FastifyReply) {
    const id = request.query?.id
    if (!id) return reply.code(404)
    const images = getDataImages()
    const index = images.findIndex(c => c.id === id)
    const image = images[index]
    const deleted = await deleteFile(image.link)
    if (deleted) {
        images.splice(index, 1)
        setDataImages(images)
    }
    return images
}
