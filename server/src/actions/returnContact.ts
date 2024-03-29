import { ApiRequest } from '../interfaces/ApiRoute'
import { FastifyReply } from 'fastify'
import { Mail } from '../lib/Mail'

export async function returnContact(request: ApiRequest, reply: FastifyReply) {
    const contact = request.body.contact
    if (!contact) return reply.status(400).send({ success: false, error: 'Informations invalides' })
    if (!contact.name || !contact.name.length) return reply.status(400).send({ success: false, error: 'Nom invalide' })
    // eslint-disable-next-line no-control-regex
    if (!contact.email || !contact.email.length || !contact.email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/))
        return reply.status(400).send({ success: false, error: 'Email invalide' })
    if (!contact.message || !contact.message.length) return reply.status(400).send({ success: false, error: 'Message invalid ou vide' })
    if (!contact.recaptcha || !contact.recaptcha.length) return reply.status(400).send({ success: false, error: 'reCAPTCHA invalide' })

    const mail = new Mail(contact)
    const sendContact = await mail.sendToContact().then(info => {
        console.log(info)
        return true
    }).catch(err => {
        console.log(err)
        return false
    })
    const send = await mail.sendToSqual().then(info => {
        console.log(info)
        return true
    }).catch(err => {
        console.log(err)
        return false
    })

    if (!sendContact && !send) return reply.status(500).send({ success: false, error: 'Impossible d\'envoyer les mails, contactez l\'administrateur' })
    if (sendContact && !send) return reply.status(500).send({ success: false, error: 'Impossible d\'envoyer le mail au destinataire, contactez l\'administrateur' })
    if (!sendContact && send) return reply.status(500).send({ success: false, error: 'Impossible d\'envoyer le mail à votre adresse mail, contactez l\'administrateur' })
    return { success: false, error: 'Message envoyé' }
}
