import { ApiRequest } from '../../interfaces/ApiRoute'
import { FastifyReply } from 'fastify'
import jwt from 'jsonwebtoken'
import { getDataAdmin } from '../../data/admin'
import bcrypt from 'bcrypt'

export async function returnConnection(request: ApiRequest, reply: FastifyReply) {
    const secret = process.env.NODE_ENV === 'dev' ? 'mySuperSecret' : process.env.PASSWORD_SECRET || 'mySuperSecret'
    const login = request.body.connection?.login
    const password = request.body.connection?.password
    const token = request.body.token

    if (token) {
        const verify = jwt.verify(token, secret)
        if (verify) {
            const payload = jwt.decode(token)
            if (typeof payload !== 'string' && payload) {
                const jwtLogin = payload.login
                return jwt.sign({ login: jwtLogin }, secret, { expiresIn: '2h' })
            }
            return reply.status(401).send('Token invalid')
        } else {
            return reply.status(401).send('Token invalid')
        }
    }

    if (login === undefined || password === undefined) return reply.status(401).send('Login ou mot de passe non valid')
    if (!login.length) return reply.status(401).send('Login vide')
    if (!password.length) return reply.status(401).send('Mot de passe vide')
    // vérifier le login et le password
    const admins = getDataAdmin()
    const admin = admins.find(a => a.login === login.toLocaleLowerCase())
    if (
        !admin ||
        (admin && !bcrypt.compareSync(password, admin.password))
    ) return reply.status(401).send('Login ou Mot de passe invalid')

    return jwt.sign({ login }, secret, { expiresIn: '2h' })
}
