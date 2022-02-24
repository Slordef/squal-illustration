import { ContactMessage } from '@/intefaces/contactMessage'
import { ActionTree } from 'vuex'
import { State } from '@/store/state'
import { api } from '@/store/api'

export const actions: ActionTree<State, State> = {
  apiGet ({ dispatch }) {
    dispatch('apiImages')
    dispatch('apiCategories')
    dispatch('apiSettings')
  },
  apiSettings ({ commit }) { return api.get('/settings').then(r => { commit('SET_SETTINGS', r) }).catch(err => { console.error(err) }) },
  apiCategories ({ commit }) { return api.get('/categories').then(r => { console.log(r); commit('SET_CATEGORIES', r) }).catch(err => { console.error(err) }) },
  apiImages ({ commit }) { return api.get('/images').then(r => { commit('SET_IMAGES', r) }).catch(err => { console.error(err) }) },
  sendContactMessage (context, contact: ContactMessage) { return api.post('/contact', { contact }).catch(err => { return { success: false, error: err.response?.data?.error || err } }) }
}
