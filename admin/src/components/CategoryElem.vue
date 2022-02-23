<template>
  <div class="category_elem"
       @drop.prevent="addImage"
       @dragover.prevent="dragOver"
       @dragleave.prevent="dragLeave"
       :class="{dropping}"
  >
    <h4>{{ props.category.name }}</h4>
    <div class="category_elem_images">
      <div class="category_elem_image" v-for="image in categoryImages" :key="props.category.index + '_' + image.id">
        <img :src="'/web/images/' + image.link" alt="">
        <div class="del">
          <div class="del_btn" @click="delImage(image.id)">
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
    <button v-if="props.category.index !== '0'" class="red small">Supprimer la galerie</button>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { Category } from '@/intefaces/category'
import { useStore } from 'vuex'
import { Image } from '@/intefaces/image'

const store = useStore()
const props = defineProps<{
  category: Category
}>()

const categoryImages = computed(() => store.getters.getImages?.filter((i: Image) => props.category.images.includes(i.id)) || [])
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
  if (props.category.images.includes(store.getters.getDragged)) return
  const cat = { ...props.category }
  const images = [...cat.images]
  images.push(store.getters.getDragged)
  cat.images = images
  store.dispatch('changeCategory', { category: cat })
}
const delImage = (id: string) => {
  const cat = { ...props.category }
  const images = [...cat.images]
  cat.images = images.filter(i => i !== id)
  store.dispatch('changeCategory', { category: cat })
}
</script>

<style scoped></style>
