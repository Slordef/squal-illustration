import * as fs from 'fs'
import * as process from 'process'
import { FastifyReply, FastifyRequest } from 'fastify'
import * as path from 'path'

export async function returnVueClient(request: FastifyRequest, reply: FastifyReply) {
    if (process.env.NODE_ENV === 'dev') return reply.redirect('http://localhost:8080')
    const stream = fs.createReadStream(path.resolve(process.cwd(), 'vue', 'client.html'))
    return reply.type('text/html').send(stream)
}
