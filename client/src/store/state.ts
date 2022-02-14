import { Image } from '@/interfaces/image'
import { Settings } from '@/interfaces/settings'
import { Category } from '@/interfaces/category'

export interface State {
  settings?: Settings
  categories?: Category[]
  images?: Image[]
}

export const state: State = {}
