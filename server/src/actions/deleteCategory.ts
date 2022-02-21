import { ApiRequest } from '../interfaces/ApiRoute'
import { FastifyReply } from 'fastify'
import { getDataCategories, setDataCategories } from '../data/categories'

export async function deleteCategory(request: ApiRequest, reply: FastifyReply) {
    const id = request.body.id
    if (!id) return reply.code(404)
    const categories = getDataCategories()
    const index = categories.findIndex(c => c.index === id)
    const category = categories[index]
    categories.splice(index, 1)
    setDataCategories(categories)
    return category
}
