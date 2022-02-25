<template>
  <PictureWatcher />
  <HeaderNavigation />
  <router-view/>
  <FooterGlobal />
</template>

<script lang="ts" setup>
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import FooterGlobal from '@/components/FooterGlobal.vue'
import { useStore } from 'vuex'
import PictureWatcher from '@/components/PictureWatcher.vue'

const store = useStore()
store.dispatch('apiGet')
</script>

<style lang="scss" src="@/scss/styles.scss"></style>
