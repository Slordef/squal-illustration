<template>
  <div class="category_elem"
       @drop.prevent="addImage"
       @dragover.prevent="dragOver"
       @dragleave.prevent="dragLeave"
       :class="{dropping}"
  >
    <h4><TextChangeInput :text="props.category.name" @change="changeName" /></h4>
    <VueDraggableNext class="category_elem_images" v-model="categoryImages">
      <CategoryElemImage v-for="img in categoryImages" :key="img" :id="img" :category="props.category" />
    </VueDraggableNext>
    <button v-if="props.category.index !== '0'" class="red small" @click="del">Supprimer la galerie</button>
  </div>
</template>

<script setup lang="ts">
import TextChangeInput from '@/components/TextChangeInput.vue'
import { VueDraggableNext } from 'vue-draggable-next'
import { computed, defineProps, ref } from 'vue'
import { Category } from '@/intefaces/category'
import { useStore } from 'vuex'
import CategoryElemImage from '@/components/CategoryElemImage.vue'

const store = useStore()
const props = defineProps<{
  category: Category
}>()

const categoryImages = computed({
  get: () => props.category.images || [],
  set: (value) => {
    const cat = { ...props.category }
    cat.images = value
    store.dispatch('changeCategory', { category: cat })
  }
})
const dropping = ref(false)
const dragOver = () => {
  if (store.getters.getDragged) {
    dropping.value = true
  }
}
const dragLeave = () => {
  dropping.value = false
}
const addImage = () => {
  dropping.value = false
  if (!store.getters.getDragged) return
  if (props.category.images.includes(store.getters.getDragged)) return
  const cat = { ...props.category }
  const images = [...cat.images]
  images.push(store.getters.getDragged)
  cat.images = images
  store.dispatch('changeCategory', { category: cat })
}
const del = async () => {
  if (!confirm('Supprimer cette catégorie ?')) return
  const id = props.category.index
  await store.dispatch('deleteCategory', { id })
}
const changeName = (name: string) => {
  const cat = { ...props.category }
  cat.name = name
  store.dispatch('changeCategory', { category: cat })
}
</script>

<style scoped></style>
