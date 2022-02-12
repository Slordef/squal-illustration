<template>
  <transition name="pictureFrame_slide">
    <div class="pictureFrame" v-show="loaded" v-if="image != null" @click="viewImage">
      <div class="pictureFrame_content">
        <div class="pictureFrame_name">{{image.name}}</div>
        <span class="pictureFrame_description">{{image.description}}</span>
      </div>
      <div class="pictureFrame_image">
        <img :src="'/Web/images/'+image.link" :alt="image.name" v-on:load="onLoad" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { emitter } from '@/store/emitter'
import { Image } from '@/interfaces/image'

const props = defineProps<{
  image: Image,
  index: number
}>()

const loaded = ref(false)

const onLoad = () => { loaded.value = true }
const viewImage = () => { emitter.emit('viewImage', props.index) }
</script>

<style></style>
