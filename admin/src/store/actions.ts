import { ActionContext, ActionTree } from 'vuex'
import { State } from '@/store/state'
import axios, { AxiosPromise } from 'axios'
import { Image } from '@/intefaces/image'
import { Category } from '@/intefaces/category'

const api = axios.create({ baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '' })

const catchImages = (promise: AxiosPromise<Image[]>, store: ActionContext<State, State>) => {
  promise.then(r => r.data).then(images => store.commit('SET_IMAGES', images)).catch(() => null)
}
const catchCategories = (promise: AxiosPromise<Category[]>, store: ActionContext<State, State>) => {
  promise.then(r => r.data).then(categories => store.commit('SET_CATEGORIES', categories)).catch(() => null)
}

export const actions: ActionTree<State, State> = {
  setDragged ({ commit }, id) { commit('SET_DRAGGED', id) },
  unDragged ({ commit }) { commit('SET_DRAGGED', undefined) },

  connection ({ commit }) { commit('CONNECTION_TOKEN', 'jahsiuazg98asf9as8f9asc') },

  getAllCategories (store) { catchCategories(api.get<Category[]>('/api/categories'), store) },
  changeCategory (store, category) { catchCategories(api.put<Category[]>('/api/categories', category), store) },

  getAllImages (store) { catchImages(api.get<Image[]>('/api/images'), store) },
  sendImages (store, images) { catchImages(api.post<Image[]>('/api/images', images), store) },
  changeImage (store, image) { catchImages(api.put<Image[]>('/api/images', image), store) },
  delImage (store, image) { catchImages(api.delete<Image[]>('/api/images', { params: image }), store) }
}
