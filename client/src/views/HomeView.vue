<template>
  <section class="home">
    <div class="image">
      <PictureFrame :id="imageID" />
    </div>
    <div class="text">
      <h1>Accueil</h1>
      <div v-html="text"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PictureFrame from '@/components/PictureFrame.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const text = computed(() => store.getters.getSettings?.homeText || '<p>Bienvenue</p>')
const imageID = computed(() => store.getters.getSettings?.homeImage)
</script>

<style scoped></style>
