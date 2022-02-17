import { ActionTree } from 'vuex'
import { State } from '@/store/state'

export const actions: ActionTree<State, State> = {
  connection ({ commit }) { commit('CONNECTION_TOKEN', 'jahsiuazg98asf9as8f9asc') }
}
