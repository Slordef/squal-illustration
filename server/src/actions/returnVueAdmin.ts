import * as fs from 'fs'
import * as path from 'path'
import * as process from 'process'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function returnVueAdmin (request: FastifyRequest, reply: FastifyReply) {
    if (process.env.NODE_ENV === 'dev') return reply.redirect('http://localhost:8081/admin')
    return fs.readFileSync(path.resolve(process.cwd(), 'vue', 'admin.html'))
}
