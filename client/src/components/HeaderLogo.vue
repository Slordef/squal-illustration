<template>
  <div class="logo">
    <div class="logo_img" :style="style"><img ref="img" src="@/assets/images/logo.svg" alt="logo"></div>
    <span>Squal</span>
  </div>
</template>

<script setup lang="ts">
import $ from 'jquery'
import { onDeactivated, onMounted, ref } from 'vue'

let el: HTMLElement
const scale = ref(-1)
const translate = ref(200)
let interval: number | undefined
const move = (pos: number, size: number, duration = 800, callback: (() => void) | undefined = undefined) => {
  $(el).animate({
    mo: pos,
    sc: size + 1
  }, {
    step (now: number, tween) {
      switch (tween.prop) {
        case 'mo': scale.value = now - 1; break
        case 'sc': translate.value = now; break
      }
    },
    duration,
    easing: 'linear',
    complete () { if (callback) callback() }
  })
}
const turn = () => {
  move(5, 0, 300)
  move(-5, -1, 300)
  move(-30, -1, 800)
  move(-35, 0, 300)
  move(-25, 1, 300)
  move(30, 1, 800)
  move(35, 0, 300)
  move(25, -1, 300)
  move(0, -1, 800)
  move(-5, 0, 300)
  move(0, 1, 300)
}
const arrive = () => {
  return new Promise<void>(resolve => {
    $(el).animate({
      move: translate.value,
      sc: scale.value + 1
    }, 1)
    move(-5, -1, 800)
    move(-10, 0, 300)
    move(-5, 1, 300)
    move(0, 1, 300, () => { resolve() })
  })
}

onMounted(() => {
  arrive().then(() => {
    interval = setInterval(() => {
      const rand = Math.floor(Math.random() * 10)
      switch (rand) {
        case 1: turn(); break
      }
      // this.turn();
    }, 10000)
  })
})
onDeactivated(() => {
  clearInterval(interval)
})
</script>

<style scoped></style>
