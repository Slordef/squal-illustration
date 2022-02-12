import { ContactMessage } from '@/interfaces/contactMessage'
import { ActionTree } from 'vuex'
import { State } from '@/store/state'

export const actions: ActionTree<State, State> = {
  sendContactMessage ({ commit }, data: ContactMessage) { return Promise.resolve({ success: true, error: '' }) }
}
