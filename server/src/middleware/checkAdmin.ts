import { ApiRequest } from '../interfaces/ApiRoute'
import { FastifyReply } from 'fastify'
import { HookHandlerDoneFunction } from 'fastify/types/hooks'
import jwt from 'jsonwebtoken'
import { getDataAdmin } from '../data/admin'

export async function checkAdmin (request: ApiRequest, reply: FastifyReply, next: HookHandlerDoneFunction) {
    if (!request.headers.authorization?.length) return reply.status(401).send('Unauthorized')
    const secret = process.env.NODE_ENV === 'dev' ? 'mySuperSecret' : process.env.PASSWORD_SECRET || 'mySuperSecret'
    const token = request.headers.authorization
    const verify = jwt.verify(token, secret)
    if (!verify) return reply.status(401).send('Unauthorized')
    const payload = jwt.decode(token)
    if (!payload) return reply.status(401).send('Unauthorized')
    if (typeof payload === 'string') return reply.status(401).send('Unauthorized')
    const login = payload.login
    if (!login) return reply.status(401).send('Unauthorized')
    const admins = getDataAdmin()
    const admin = admins.find(a => a.login.toLowerCase() === login.toLowerCase())
    if (!admin) return reply.status(401).send('Unauthorized')
    next()
}
