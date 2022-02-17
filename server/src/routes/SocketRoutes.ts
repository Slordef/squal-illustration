import { Actions } from '../actions/Actions'
import { Socket } from 'socket.io'
import { ClientToServerSocket, ServerToClientSocket } from '../interfaces/SocketRoute'

export function socketRoutes(socket: Socket<ClientToServerSocket, ServerToClientSocket>) {
    socket.on('login', Actions.socketLogin(socket))
    socket.on('token', Actions.socketToken(socket))
}
