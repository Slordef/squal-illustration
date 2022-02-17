import { MutationTree } from 'vuex'
import { State } from '@/store/state'

export const mutations: MutationTree<State> = {
  CONNECTION_TOKEN (state, payload) { state.token = payload }
}
