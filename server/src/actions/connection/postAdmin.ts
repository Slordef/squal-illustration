import { ApiRequest } from '../../interfaces/ApiRoute'
import { FastifyReply } from 'fastify'
import { getDataAdmin, setDataAdmin } from '../../data/admin'
import bcrypt from 'bcrypt'

export async function postAdmin(request: ApiRequest, reply: FastifyReply) {
    let login = request.body.register?.login
    const pass = request.body.register?.password
    const token = request.body.register?.token

    if (login === undefined || pass === undefined || token === undefined) return reply.status(400).send('Login, mot de passe ou token non valid')
    if (!login.length) return reply.status(400).send('Login vide')
    if (!pass.length) return reply.status(400).send('Mot de passe vide')
    if (!token.length) return reply.status(400).send('Token vide')
    if (token !== (process.env.NODE_ENV === 'dev' ? 'abcdef' : process.env.TOKEN_ADD_ADMIN)) return reply.status(400).send('Token invalide')

    login = login.toLowerCase()
    const admins = getDataAdmin()
    if (admins.find(a => a.login === login)) return reply.status(403).send('Login déjà existant')

    if (!pass.match(/(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)) return reply.status(403).send('Mot de passe insuffisamment complexe (8 caractères, doit contenir des chiffre, majuscules et minuscules')

    const password = bcrypt.hashSync(pass, bcrypt.genSaltSync(10))
    admins.push({ login, password })
    setDataAdmin(admins)
    return 'Admin ajouté'
}
