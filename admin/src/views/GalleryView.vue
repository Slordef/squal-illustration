<template>
  <section class="gallery">
    <div>
      <div>
        <h3>Image de page d'accueil</h3>
      </div>
      <div>
        <h3>Galerie</h3>
        <CategoryElem v-for="category in categories" :key="category.index" :category="category" />
        <div class="newGallery">
          <input type="text" name="newGallery" id="newGallery" placeholder="Titre de la nouvelle galerie" v-model="titleNewGallery">
          <button @click="fnNewGallery">Ajouter une galerie</button>
        </div>
      </div>
    </div>
    <GallerySelector />
  </section>
</template>

<script setup lang="ts">
import CategoryElem from '@/components/CategoryElem.vue'

import { Category } from '@/intefaces/category'
import GallerySelector from '@/components/GallerySelector.vue'
import { ref } from 'vue'

const categories = ref<Category[]>([
  {
    index: '0',
    name: 'Galerie',
    images: ['1', '2']
  }
])

const titleNewGallery = ref('')
const existsGallery = (name: string) => {
  return !!categories.value.find(c => c.name.toLocaleLowerCase() === name.toLocaleLowerCase())
}
const getNewIndex = () => {
  return categories.value.reduce((prev, curr) => {
    const n = parseInt(prev)
    const c = parseInt(curr.index)
    return c > n ? `${c + 1}` : `${n + 1}`
  }, '0')
}
const fnNewGallery = () => {
  try {
    if (titleNewGallery.value.length <= 0) throw new Error('Il faut un titre à la nouvelle galerie')
    if (existsGallery(titleNewGallery.value)) throw new Error('Ce nom de galerie existe déjà')
    categories.value.push({
      index: getNewIndex(),
      name: titleNewGallery.value,
      images: []
    })
    titleNewGallery.value = ''
  } catch (e) {
    alert(e.message)
  }
}
</script>

<style scoped></style>
