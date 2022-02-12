<template>
  <transition name="pictureFrame_slide">
    <div class="pictureFrame" v-show="loaded" v-if="image != null" @click="viewImage">
      <div class="pictureFrame_content">
        <div class="pictureFrame_name">{{image.name}}</div>
        <span class="pictureFrame_description">{{image.description}}</span>
      </div>
      <div class="pictureFrame_image">
        <img :src="'/web/images/'+image.link" :alt="image.name" v-on:load="onLoad" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { emitter } from '@/store/emitter'
import { Image } from '@/interfaces/image'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps<{
  id: string,
  index: number | undefined
}>()

const loaded = ref(false)

const image = computed((): Image => store.getters.getImages?.find((i: Image) => i.id === props.id) || { id: '0', name: 'No Image', description: '', link: '', category: 0 })
const onLoad = () => { loaded.value = true }
const viewImage = () => { emitter.emit('viewImage', props.index) }
</script>

<style></style>
