import { Image } from '@/intefaces/image'
import { Settings } from '@/intefaces/settings'
import { Category } from '@/intefaces/category'

export interface State {
  settings?: Settings
  categories?: Category[]
  images?: Image[]
}

export const state: State = {}
