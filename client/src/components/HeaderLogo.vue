<template>
  <div class="logo">
    <div class="logo_img" :style="style"><img ref="img" src="/Web/template/logo.svg" alt="logo"></div>
    <span>Squal</span>
  </div>
</template>

<script setup lang="ts">
import * as $ from 'jquery'
import { onMounted, ref } from 'vue'

let el: HTMLElement
const scale = ref(-1)
const translate = ref(200)
let interval = null
const move = (pos: number, size: number, duration = 800, callback: (() => void) | undefined) => {
  $(el).animate({
    move: move,
    sc: size + 1
  }, {
    step (now: number, tween: jQuery.Tween<HTMLElement>) {
      switch (tween.prop) {
        case 'move': scale.value = now - 1; break
        case 'sc': translate.value = now; break
      }
    }
  })
}
const turn = () => {

}
const arrive = () => {
  return new Promise(resolve => {
    move()
  })
}

onMounted(() => {
  interval = setInterval(() => arrive())
})
</script>

<style scoped></style>
