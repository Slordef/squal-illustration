import {
    ContextConfigDefault,
    FastifyRequest,
    HTTPMethods,
    RawReplyDefaultExpression,
    RawRequestDefaultExpression,
    RawServerDefault,
    RouteHandlerMethod, RouteOptions
} from 'fastify'
import { Category } from './category'
import { Image } from './image'
import { Settings } from './settings'

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
        }
    },
    Querystring: {
        id?: string
    }
}
// eslint-disable-next-line
export type Raw = RawRequestDefaultExpression
type Handler = RouteHandlerMethod<RawServerDefault, Raw, RawReplyDefaultExpression, BodySetup, ContextConfigDefault>
export type ApiRoute = [Method, URL, Handler]
export type Route = RouteOptions<RawServerDefault, Raw, RawReplyDefaultExpression, BodySetup, ContextConfigDefault>
export type ApiRequest = FastifyRequest<BodySetup, RawServerDefault, Raw>
