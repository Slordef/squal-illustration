<template>
  <div v-if="id" class="category_elem_image" :key="props.category.index + '_' + id">
    <img :src="'/web/images/' + link" alt="">
    <div class="del">
      <div class="del_btn" @click="delImage">
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { Category } from '@/intefaces/category'
import { useStore } from 'vuex'
import { Image } from '@/intefaces/image'

const store = useStore()
const props = defineProps<{
  id: string,
  category: Category
}>()

const image = computed<Image>(() => store.getters.getImages?.find((i: Image) => i.id === props.id))
const link = computed(() => image.value?.link || '')

const delImage = () => {
  const cat = { ...props.category }
  const images = [...cat.images]
  cat.images = images.filter(i => i !== props.id)
  store.dispatch('changeCategory', { category: cat })
}
</script>

<style scoped></style>
