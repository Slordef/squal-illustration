import { GetterTree } from 'vuex'
import { State } from '@/store/state'

export const getters: GetterTree<State, State> = {
  getDragged (state) { return state.dragged },
  getImages (state) { return state.images },
  getCategories (state) { return state.categories }
}
