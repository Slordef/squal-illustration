import {
    ContextConfigDefault,
    FastifyRequest,
    HTTPMethods,
    RawReplyDefaultExpression,
    RawRequestDefaultExpression,
    RawServerDefault,
    RouteHandlerMethod
} from 'fastify'
import { Category } from './category'
import { Image } from './image'
import { Settings } from './settings'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH' | 'OPTIONS' | HTTPMethods[]
type URL = string
type BodySetup = {
    Body: {
        id?: string
        category?: Category,
        image?: Image,
        settings?: Settings
    }
}
type Handler = RouteHandlerMethod<RawServerDefault, RawRequestDefaultExpression, RawReplyDefaultExpression, BodySetup, ContextConfigDefault>
export type ApiRoute = [Method, URL, Handler]

export type ApiRequest = FastifyRequest<BodySetup>
