<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home' }" >Home</router-link>
      <router-link :to="{ name: 'Gallery' }" >Galerie</router-link>
      <router-link :to="{ name: 'Settings' }" >Configuration</router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
