<template>
  <span :class="$attrs.class" v-show="!edit" @dblclick="edition">{{ text }}</span>
  <input type="text" v-show="edit" v-model="text" @keyup.enter="change" @keyup.esc="cancel" :ref="el => input = el">
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps, watch } from 'vue'

const props = defineProps<{
  text: string
}>()
const emit = defineEmits<{(e: 'change', name: string): void}>()

const edit = ref(false)
const text = ref(props.text)
const input = ref<HTMLElement>()
const edition = () => {
  edit.value = true
  setTimeout(() => input.value?.focus(), 10)
}
const cancel = () => {
  text.value = props.text
  edit.value = false
}
const change = () => {
  emit('change', text.value)
  edit.value = false
}
watch(() => props.text, () => {
  text.value = props.text
})
</script>

<style scoped></style>
