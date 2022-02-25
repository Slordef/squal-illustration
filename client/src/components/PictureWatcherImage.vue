<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
    <div class="pictureWatcher_image">
      <img :src="'/web/images/'+image.link" :alt="image.name" />
      <div class="title" v-if="false">
        <h1>{{image.name}}</h1>
        <p>{{image.description}}</p>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { Image } from '@/intefaces/image'
import JQuery from 'jquery'
import { defineProps } from 'vue'

const $ = JQuery
const props = defineProps<{
  image: Image,
  direction: 'left' | 'right'
}>()

const beforeEnter = (el: HTMLElement) => {
  if (props.direction === 'left') $(el).css('left', '-100%')
  if (props.direction === 'right') $(el).css('left', '150%')
}
const enter = (el: HTMLElement, done: () => void) => {
  $(el).animate({ left: '50%' }, { duration: 300, complete: function () { done() } })
}
const leave = (el: HTMLElement, done: () => void) => {
  if (props.direction === 'left') $(el).animate({ left: '150%' }, { duration: 300, complete: function () { done() } })
  if (props.direction === 'right') $(el).animate({ left: '-100%' }, { duration: 300, complete: function () { done() } })
}
</script>

<style scoped lang="scss">
.title{
  position: absolute;
  z-index: 50;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  color: white;
  font-weight: bold;
  font-size: .7em;
  text-align: center;
  text-shadow: black 3px 3px 3px;
}
</style>
