import { Image } from '@/intefaces/image'
import { Category } from '@/intefaces/category'
import { Settings } from '@/intefaces/settings'

export interface State {
  dragged?: string,
  token?: string,
  images?: Image[],
  categories?: Category[],
  settings?: Settings
}

export const state: State = {}
