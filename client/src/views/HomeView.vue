<template>
  <div class="home">
    <div class="image">
      <PictureFrame :image="image" />
    </div>
    <div class="text">
      <h3>Accueil</h3>
      <div v-html="text"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const text = `<p>Illustration - Graphisme - Animation</p>
<p>Freelance basée en Suisse</p>
`
</script>

<style scoped></style>
