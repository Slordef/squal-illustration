<template>
  <div :draggable="draggable" class="gallery_selector_image" v-show="loaded" @dragstart="onDrag" @dragend="onDragEnd">
    <img draggable="false" :src="'/web/images/'+link" :alt="name" @load="loaded = true">
    <div class="properties">
      <TextChangeInput class="name" @change="changeName" :text="name" />
      <TextChangeInput @change="changeDescription" :text="description" />
      <button
        @mousemove.stop="() => draggable = false"
        @mouseleave.stop="() => draggable = true"
        class="red"
        @click.prevent.stop="del"
      >Supprimer</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { Image } from '@/intefaces/image'
import TextChangeInput from '@/components/TextChangeInput.vue'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps<{
  image: Image
}>()

const loaded = ref(false)
const name = computed(() => props.image.name)
const description = computed(() => props.image.description)
const link = computed(() => props.image.link)
const draggable = ref(true)

const change = (name: string, description: string) => {
  const image: Image = {
    id: props.image.id,
    name,
    description,
    link: props.image.link,
    category: 0
  }
  store.dispatch('changeImage', { image })
}
const changeName = (name: string) => { change(name, props.image.description) }
const changeDescription = (description: string) => { change(props.image.name, description) }
const del = () => {
  if (confirm('Voulez vous vraiment supprimer cette image ?')) {
    store.dispatch('delImage', { id: props.image.id })
  }
}
const onDrag = () => {
  store.dispatch('setDragged', props.image.id)
}
const onDragEnd = () => {
  store.dispatch('unDragged')
}
</script>

<style scoped></style>
