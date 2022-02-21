import { Server } from '../src/lib/Server'
import { Application } from '../src/lib/Application'
import { Router } from '../src/lib/Router'
import axios from 'axios'
import { ApiRoute } from '../src/interfaces/ApiRoute'
import { testRouteApplication } from './TestRouteApplication'

const fakeRoutes: ApiRoute[] = [
    ['GET', '/', async () => { return 'Hello Jest !' }],
    ['GET', '/error', async (request, reply) => { reply.status(500); return { err: 'Internal Server Error' } }]
]

describe('Application', () => {
    describe('Construct application handlers', () => {
        it('Base api route handle', testRouteApplication(3030, fakeRoutes, { method: 'get', path: '/' }, (response) => {
            expect(response.data).toContain('Hello Jest !')
        }))
        it('Test api error handle', (done) => {
            const application = new Application(new Server(3031))
            application.setRouter(new Router(fakeRoutes))
            application.run().then(() => {
                axios.get('http://localhost:3031/error').catch(err => {
                    expect(err.response.status).toBe(500)
                    expect(err.response.data).toMatchObject({ err:'Internal Server Error' })
                    application.stop().then(() => {
                        done()
                    })
                })
            })
        })
    })
})
