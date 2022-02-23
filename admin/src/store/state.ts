import { Image } from '@/intefaces/image'
import { Category } from '@/intefaces/category'

export interface State {
  dragged?: string,
  token?: string,
  images?: Image[],
  categories?: Category[]
}

export const state: State = {}
