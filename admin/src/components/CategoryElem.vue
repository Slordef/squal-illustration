<template>
  <div class="category_elem">
    <h4>{{ props.category.name }}</h4>
    <div>

    </div>
    <button v-if="props.category.index !== '0'" class="red small">Supprimer la galerie</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Category } from '@/intefaces/category'

const props = defineProps<{
  category: Category
}>()
</script>

<style scoped></style>
