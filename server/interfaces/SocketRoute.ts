import { Socket } from 'socket.io'

type Event = string
export type SocketRoute = [Event, <T>(socket: Socket, data: T) => void]
