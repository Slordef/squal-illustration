<template>
  <section>
    <div class="form home">
      <div class="form-group">
        <label for="login">Login : </label>
        <input type="text" name="login" id="login" v-model="login">
      </div>
      <div class="form-group">
        <label for="currentPassword">Mot de passe actuel : </label>
        <input type="text" name="currentPassword" id="currentPassword" v-model="currentPassword">
      </div>
      <div class="form-group">
        <label for="newPassword">Nouveau mot de passe : </label>
        <input type="text" name="newPassword" id="newPassword" v-model="newPassword">
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirmer le mot de passe : </label>
        <input type="text" name="confirmPassword" id="confirmPassword" v-model="confirmPassword">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const login = ref('')
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
</script>

<style scoped></style>
