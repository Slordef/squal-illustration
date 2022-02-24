import { ApiRequest } from '../../interfaces/ApiRoute'
import { FastifyReply } from 'fastify'
import { getDataAdmin, setDataAdmin } from '../../data/admin'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function putAdmin(request: ApiRequest, reply: FastifyReply) {
    if (!request.body.admin) return reply.status(400).send('Login ou mots de passe invalides')
    const { login, password, token, current } = request.body.admin

    if (!current || !login || !password || !token) return reply.status(400).send('Informations invalides')
    const admins = getDataAdmin()
    const payload = jwt.decode(token)
    if (!payload) return reply.status(400).send('Token invalid')
    if (typeof payload === 'string' || !payload.login) return reply.status(400).send('Informations invalides')
    const lastLogin = payload.login

    try {
        const admin = admins.find(a => a.login === lastLogin.toLowerCase())
        if (!admin) return reply.status(404).send('Admin introuvable')
        if (!bcrypt.compareSync(current, admin.password)) return reply.status(401).send('Mot de passe actuel invalid')
        admin.login = login
        admin.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        setDataAdmin(admins)
    } catch (e) {
        console.log(e)
        return reply.status(500).send('Une erreur est survenue')
    }
    return 'Admin mit à jour'
}
