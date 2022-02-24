import nodemailer from 'nodemailer'

export class Mail {
    private transporter: nodemailer.Transporter
    private messageToContact: { subject: string; from: string; html: string; to: string; text: string }
    private message: { subject: string; from: string; html: string; to: string; text: string }

    constructor(private contact: { name: string, email: string, message: string, recaptcha: string }) {
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST || 'localhost',
            port: parseInt(process.env.MAIL_PORT || '25'),
            tls: {
                rejectUnauthorized: false
            }
        })
        this.messageToContact = {
            from: 'noreply@squal.ch',
            to: contact.email,
            subject: 'Squal - Illustration | Contact',
            text: contact.message,
            html: `<p>${contact.message}</p>`
        }
        this.message = {
            from: contact.email,
            to: 'slordef.vikamet@gmail.com',
            subject: 'Squal - Illustration | Contact',
            text: contact.message,
            html: `<p>${contact.message}</p>`
        }
    }
    send () {
        return new Promise((resolve, reject) => {
            this.transporter.sendMail(this.messageToContact, (err, info) => {
                if (err) return reject(err)
                resolve(info)
            })
        })
    }
}
