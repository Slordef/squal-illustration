import { State } from '@/store/state'
import { GetterTree } from 'vuex'

export const getters: GetterTree<State, State> = {
  getGalleryChoices (state) { return state.galleryChoices }
}
