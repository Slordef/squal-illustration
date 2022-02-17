<template>
  <section>
    <div class="form settings">
      <div class="form-group">
        <label for="homeText">Text de page d'accueil</label>
        <input type="text" name="homeText" id="homeText" v-model="homeText">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const homeText = ref('')
</script>

<style scoped></style>
