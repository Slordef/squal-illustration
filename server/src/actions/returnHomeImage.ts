import { ApiRequest } from '../interfaces/ApiRoute'
import { FastifyReply } from 'fastify'
import * as fs from 'fs'
import path from 'path'
import { getDataSettings } from '../data/settings'
import { getDataImages } from '../data/images'

export async function returnHomeImage (request: ApiRequest, reply: FastifyReply) {
    const settings = getDataSettings()
    const id = settings.homeImage
    const images = getDataImages()
    const image = images.find(i => i.id === id)
    if (!image) return reply.status(404)
    const link = image.link
    const stream = fs.createReadStream(path.resolve(process.cwd(), '..', 'assets', link))
    return reply.send(stream)
}
