import { Socket } from 'socket.io'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import * as process from 'process'

dotenv.config()

export function socketToken(socket: Socket) {
    return (data: {token: string}) => {
        const key = process.env.TOKEN_KEY
        if(!key) return
        jwt.verify(data.token, key)
    }
}
