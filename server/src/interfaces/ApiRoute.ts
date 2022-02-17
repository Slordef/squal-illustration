import { HTTPMethods, RouteHandlerMethod } from 'fastify'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH' | 'OPTIONS' | HTTPMethods[]
type URL = string
type Handler = RouteHandlerMethod
export type ApiRoute = [Method, URL, Handler]
