<template>
  <HeaderNavigation />
  <router-view/>
  <FooterGlobal />
</template>

<script lang="ts" setup>
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import FooterGlobal from '@/components/FooterGlobal.vue'
import { useStore } from 'vuex'

const store = useStore()
store.dispatch('apiGet')
</script>

<style lang="scss" src="@/scss/styles.scss"></style>
