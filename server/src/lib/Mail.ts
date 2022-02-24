import nodemailer from 'nodemailer'

export class Mail {
    private transporter: nodemailer.Transporter
    private messageToContact: { subject: string; from: string; html: string; to: string; text: string }
    private message: { subject: string; from: string; html: string; to: string; text: string }

    constructor(private contact: { name: string, email: string, message: string, recaptcha: string }) {
        this.transporter = nodemailer.createTransport({
            // https://ethereal.email/
            host: process.env.MAIL_HOST || 'smtp.ethereal.email',
            port: parseInt(process.env.MAIL_PORT || '587'),
            auth: {
                user: process.env.MAIL_LOGIN || 'zion.pacocha45@ethereal.email',
                pass: process.env.MAIL_PASS || 'cU7RBkwCeNGNjCUvy2'
            }
        })
        this.messageToContact = {
            from: 'no-reply@squal.ch',
            to: contact.email,
            subject: 'Squal - Illustration | Contact',
            text: contact.message,
            html: `
<h1>Mail bien reçu !</h1>
<p>Votre mail a bien été réceptionné. Voici la copie de votre message.</p>
<h4>Votre message :</h4>
<p>${contact.message}</p>
`
        }
        this.message = {
            from: 'no-reply@squal.ch',
            to: 'pascalebernasconi@gmail.com',
            subject: 'Squal - Illustration | Contact',
            text: contact.message,
            html: `
<h1>${contact.email}</h1>
<p>${contact.message}</p>
`
        }
    }
    sendToContact () {
        return new Promise((resolve, reject) => {
            this.transporter.sendMail(this.messageToContact, (err, info) => {
                if (err) return reject(err)
                resolve(info)
            })
        })
    }
    sendToSqual () {
        return new Promise((resolve, reject) => {
            this.transporter.sendMail(this.message, (err, info) => {
                if (err) return reject(err)
                resolve(info)
            })
        })
    }
}
