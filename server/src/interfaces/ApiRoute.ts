import {
    ContextConfigDefault,
    FastifyRequest,
    HTTPMethods,
    RawReplyDefaultExpression,
    RawRequestDefaultExpression,
    RawServerDefault,
    RouteHandlerMethod,
    RouteOptions
} from 'fastify'
import { Category } from './category'
import { Image } from './image'
import { Settings } from './settings'
import { preHandlerHookHandler } from 'fastify/types/hooks'
import { Multipart } from 'fastify-multipart'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH' | 'OPTIONS' | HTTPMethods[]
type URL = string
type BodySetup = {
    Body: {
        category?: Category,
        image?: Image,
        settings?: Settings,
        token?: string,
        connection?: {
            login: string,
            password: string
        },
        register?: {
            login: string,
            password: string,
            token: string
        },
        admin?: {
            login: string,
            current: string,
            password: string,
            token: string
        },
        contact: {
            name: string,
            email: string,
            message: string,
            recaptcha: string
        }
    },
    Querystring: {
        id?: string
    }
}

export type Raw = RawRequestDefaultExpression
type Handler = RouteHandlerMethod<RawServerDefault, Raw, RawReplyDefaultExpression, BodySetup, ContextConfigDefault>
type PreHandler = preHandlerHookHandler<RawServerDefault, Raw, RawReplyDefaultExpression, BodySetup, ContextConfigDefault>
export type ApiRoute = [Method, URL, Handler] | [Method, URL, Handler, PreHandler[]]
export type Route = RouteOptions<RawServerDefault, Raw, RawReplyDefaultExpression, BodySetup, ContextConfigDefault>
export type ApiRequest = FastifyRequest<BodySetup, RawServerDefault, Raw> & {
    files?: () => AsyncIterableIterator<Multipart>
}
