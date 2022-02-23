<template>
  <div class="gallery_selector" :class="{dropping}"
       @dragenter.prevent="dragEnter"
       @dragover.prevent
       @dragleave.prevent="dragLeave"
       @dragend.prevent="dragEnd"
       @drop.prevent="drop"
  >
    <div class="gallery_selector_search">
      <input type="text" v-model="filter" placeholder="Chercher...">
    </div>
    <div class="gallery_selector_images">
      <GallerySelectorImage v-for="image in filtered" :key="image.id" :image="image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Image } from '@/intefaces/image'
import GallerySelectorImage from '@/components/GallerySelectorImage.vue'
import { useStore } from 'vuex'

let countDragEnter = 0
const store = useStore()
const dropping = ref(false)
const dragEnter = (e: DragEvent) => {
  if (!e.dataTransfer?.types.length) return
  dropping.value = true
  countDragEnter++
}
const dragEnd = (e: DragEvent) => {
  if (!e.dataTransfer?.types.length) return
  countDragEnter = 0
  dropping.value = false
}
const dragLeave = (e: DragEvent) => {
  if (!e.dataTransfer?.types.length) return
  countDragEnter--
  if (countDragEnter === 0) dropping.value = false
}
const drop = (e: DragEvent) => {
  countDragEnter = 0
  dropping.value = false
  if (!e.dataTransfer?.types.length) return
  const formData = new FormData()
  for (const file of e.dataTransfer.files) {
    formData.append(file.name, file)
  }
  store.dispatch('sendImages', formData)
}

const filter = ref('')
const images = computed<Image[]>(() => store.getters.getImages || [])
const filtered = computed<Image[]>(() => images.value.filter((i: Image) => i.name.match(new RegExp(filter.value, 'i'))))
const getImages = () => {
  store.dispatch('getAllImages')
}
getImages()
</script>

<style scoped></style>
