<template>
  <section class="gallery">
    <div class="gallery_categories">
      <div>
        <h3>Image de page d'accueil</h3>
        <HomeImageDefine />
      </div>
      <div>
        <h3>Galerie</h3>
        <div class="newGallery">
          <input type="text" name="newGallery" id="newGallery" placeholder="Titre de la nouvelle galerie" v-model="titleNewGallery">
          <button @click="fnNewGallery">Ajouter une galerie</button>
        </div>
        <CategoryElem v-for="category in categories" :key="category.index" :category="category" />
      </div>
    </div>
    <GallerySelector />
  </section>
</template>

<script setup lang="ts">
import CategoryElem from '@/components/CategoryElem.vue'
import { Category } from '@/intefaces/category'
import GallerySelector from '@/components/GallerySelector.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import HomeImageDefine from '@/components/HomeImageDefine.vue'

const store = useStore()

const categories = computed<Category[]>(() => store.getters.getCategories || [])
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
const fnNewGallery = async () => {
  try {
    if (titleNewGallery.value.length <= 0) throw new Error('Il faut un titre à la nouvelle galerie')
    if (existsGallery(titleNewGallery.value)) throw new Error('Ce nom de galerie existe déjà')
    const category = {
      index: getNewIndex(),
      name: titleNewGallery.value,
      images: []
    }
    await store.dispatch('addCategory', { category })
    titleNewGallery.value = ''
  } catch (e) {
    alert(e.message)
  }
}
store.dispatch('getAllCategories')
</script>

<style scoped></style>
