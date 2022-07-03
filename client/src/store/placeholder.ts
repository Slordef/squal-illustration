import { Image } from '@/intefaces/image'
import { Category } from '@/intefaces/category'
import { Settings } from '@/intefaces/settings'

export const placeholderImages: Image[] = [
  { id: '1', name: 'City', description: 'City description', link: 'city.jpg', category: 0 },
  { id: '2', name: 'Nenu', description: 'Nenu description', link: 'nenu.jpg', category: 0 },
  { id: '3', name: 'Oiseau', description: 'Oiseau description', link: 'oiseau.jpg', category: 0 },
  { id: '4', name: 'Rose', description: 'Rose description', link: 'rose.jpeg', category: 0 }
]

export const placeholderCategories: Category[] = [
  { index: '0', name: 'Galerie', images: ['1', '2', '3', '4'] }
]

export const placeholderSettings: Settings = {
  homeText: '<p>Bonjour et bienvenue sur ce site de test !</p>',
  homeImage: '2'
}
