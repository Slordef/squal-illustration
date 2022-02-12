<template>
  <section class="gallery">
    <h1>Galerie</h1>
    <div class="gallery_pictures">
      <PictureFrame v-for="(id, index) in category.images" :key="id" :index="index" :id="id" />
    </div>
  </section>
</template>

<script setup lang="ts">
import PictureFrame from '@/components/PictureFrame.vue'
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'
import { Category } from '@/interfaces/category'

const store = useStore()
const props = defineProps<{
  id: string
}>()

const category = computed(() => store.getters.getCategories?.find((i: Category) => i.index === props.id) || [])
</script>

<style scoped></style>
