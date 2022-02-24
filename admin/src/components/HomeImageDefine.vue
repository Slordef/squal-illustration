<template>
  <div class="homeImageDefine"
       @drop.prevent="setImage"
       @dragover.prevent="dragOver"
       @dragleave.prevent="dragLeave"
       :class="{dropping}"
  >
    <div class="homeImageDefine_image" v-if="image">
      <img :src="'/web/images/' + image.link" :alt="image.name">
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { Image } from '@/intefaces/image'
import { Settings } from '@/intefaces/settings'

const store = useStore()

const images = computed<Image[]>(() => store.getters.getImages || [])
const settings = computed<Settings>(() => store.getters.getSettings)
const image = computed(() => images.value.find(i => i.id === settings.value?.homeImage))

const dropping = ref(false)
const dragOver = () => {
  if (store.getters.getDragged) {
    dropping.value = true
  }
}
const dragLeave = () => {
  dropping.value = false
}
const setImage = () => {
  dropping.value = false
  const set = { ...settings.value }
  set.homeImage = store.getters.getDragged
  store.dispatch('setSettings', { settings: set })
}

const getSettings = () => {
  store.dispatch('getAllSettings')
}
getSettings()
</script>

<style scoped></style>
