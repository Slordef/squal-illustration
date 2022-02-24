import { MutationTree } from 'vuex'
import { State } from '@/store/state'

export const mutations: MutationTree<State> = {
  SET_DRAGGED (state, payload) { state.dragged = payload },
  CONNECTION_TOKEN (state, payload) { state.token = payload },
  SET_IMAGES (state, payload) { state.images = payload },
  SET_CATEGORIES (state, payload) { state.categories = payload },
  SET_SETTINGS (state, payload) { state.settings = payload }
}
