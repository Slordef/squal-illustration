import { ApiRequest } from '../interfaces/ApiRoute'
import { FastifyReply } from 'fastify'
import { getCategories, setCategories } from '../data/categories'

export function deleteCategory(request: ApiRequest, reply: FastifyReply) {
    const id = request.body.id
    if (!id) return reply.code(404)
    const categories = getCategories()
    const index = categories.findIndex(c => c.index === id)
    const category = categories[index]
    categories.splice(index, 1)
    setCategories(categories)
    return category
}
