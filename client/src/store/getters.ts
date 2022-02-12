import { State } from '@/store/state'
import { GetterTree } from 'vuex'

export const getters: GetterTree<State, State> = {
  getSettings (state) { return state.settings },
  getCategories (state) { return state.categories },
  getImages (state) { return state.images }
}
