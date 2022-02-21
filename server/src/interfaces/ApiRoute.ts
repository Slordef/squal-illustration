import { FastifyRequest, HTTPMethods, RouteHandlerMethod } from 'fastify'
import { Category } from './category'
import { Image } from './image'
import { Settings } from './settings'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH' | 'OPTIONS' | HTTPMethods[]
type URL = string
type Handler = RouteHandlerMethod
export type ApiRoute = [Method, URL, Handler]

export type ApiRequest = FastifyRequest<{
    Body: {
        id?: string
        category?: Category,
        image?: Image,
        settings?: Settings
    }
}>
