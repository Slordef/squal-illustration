import { testRouteApplication } from './TestRouteApplication'
import { apiRoutes } from '../src/routes/ApiRoutes'

describe('Api Routes', () => {
    describe('Placeholders routes', () => {
        it('Get Images', testRouteApplication(3032, apiRoutes, { method: 'get', path: '/api/images' }, response => {
            const list = response.data
            expect(list.length).toBe(4)
            expect(list[0].name).toBe('City')
            expect(list[1].name).toBe('Nenu')
            expect(list[2].name).toBe('Oiseau')
            expect(list[3].name).toBe('Rose')
        }))
        it('Get Categories', testRouteApplication(3033, apiRoutes, { method: 'get', path: '/api/categories' }, response => {
            const list = response.data
            expect(list.length).toBe(1)
            expect(list[0].name).toBe('Gallery')
        }))
        it('Get Settings', testRouteApplication(3034, apiRoutes, { method: 'get', path: '/api/settings' }, response => {
            const list = response.data
            expect(list.homeText).toBe('<p>Bonjour et bienvenue sur ce site de test !</p>')
            expect(list.homeImage).toBe('2')
        }))
    })
})
