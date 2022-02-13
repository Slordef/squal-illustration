
export interface ClientToServerSocket {
    login: (data: {login: string, password: string}) => void
    token: (data: {token: string}) => void
}

export interface ServerToClientSocket {
    session: (token: void) => void
}
