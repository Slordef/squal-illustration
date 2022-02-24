import { ActionContext, ActionTree } from 'vuex'
import { State } from '@/store/state'
import axios, { AxiosError, AxiosPromise } from 'axios'
import { Image } from '@/intefaces/image'
import { Category } from '@/intefaces/category'
import { Settings } from '@/intefaces/settings'

const api = () => axios.create({ baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '', headers: { authorization: localStorage.getItem('token') || '' } })

const catchImages = (promise: AxiosPromise<Image[]>, store: ActionContext<State, State>) => {
  promise.then(r => r.data).then(images => store.commit('SET_IMAGES', images)).catch(() => null)
}
const catchCategories = (promise: AxiosPromise<Category[]>, store: ActionContext<State, State>) => {
  promise.then(r => r.data).then(categories => store.commit('SET_CATEGORIES', categories)).catch(() => null)
}

const catchSettings = (promise: AxiosPromise<Settings>, store: ActionContext<State, State>) => {
  promise.then(r => r.data).then(settings => store.commit('SET_SETTINGS', settings)).catch(() => null)
}

export const actions: ActionTree<State, State> = {
  setDragged ({ commit }, id) { commit('SET_DRAGGED', id) },
  unDragged ({ commit }) { commit('SET_DRAGGED', undefined) },

  connection ({ commit }, payload) {
    return api().post<string>('/admin/connection', payload)
      .then(r => r.data)
      .then(r => {
        localStorage.setItem('token', r)
        commit('CONNECTION_TOKEN', r)
        return { err: '' }
      })
      .catch((err: Error | AxiosError) => {
        localStorage.removeItem('token')
        if (axios.isAxiosError(err)) {
          return { err: err.response?.data || 'Une erreur est survenue' }
        }
        return { err: err.message }
      })
  },
  addAdmin (store, payload) {
    return api().post<string>('/admin/add', payload).then(() => ({ err: '' }))
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          return { err: err.response?.data || 'Une erreur est survenue' }
        }
        return { err: err.message }
      })
  },
  updateAdmin (store, payload) {
    return api().put<string>('/admin/update', payload).then(() => ({ err: '' }))
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          return { err: err.response?.data || 'Une erreur est survenue' }
        }
        return { err: err.message }
      })
  },

  getAllCategories (store) { catchCategories(api().get<Category[]>('/api/categories'), store) },
  addCategory (store, category) { catchCategories(api().post<Category[]>('/api/categories', category), store) },
  changeCategory (store, category) { catchCategories(api().put<Category[]>('/api/categories', category), store) },
  deleteCategory (store, category) { catchCategories(api().delete('/api/categories', { params: category }), store) },

  getAllImages (store) { catchImages(api().get<Image[]>('/api/images'), store) },
  sendImages (store, images) { catchImages(api().post<Image[]>('/api/images', images), store) },
  changeImage (store, image) { catchImages(api().put<Image[]>('/api/images', image), store) },
  delImage (store, image) { catchImages(api().delete<Image[]>('/api/images', { params: image }), store) },

  getAllSettings (store) { catchSettings(api().get<Settings>('/api/settings'), store) },
  setSettings (store, settings) { catchSettings(api().put<Settings>('/api/settings', settings), store) }
}
