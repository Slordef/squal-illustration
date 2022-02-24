<template>
  <section>
    <div class="form home">
      <div class="form-group">
        <span class="error" v-if="error.length">{{error}}</span>
      </div>
      <div class="form-group">
        <span class="success" v-if="success.length">{{success}}</span>
      </div>
      <div class="form-group">
        <label for="login">Login : </label>
        <input type="text" name="login" id="login" v-model="login">
      </div>
      <div class="form-group">
        <label for="currentPassword">Mot de passe actuel : </label>
        <input type="password" name="currentPassword" id="currentPassword" v-model="currentPassword">
      </div>
      <div class="form-group">
        <label for="newPassword">Nouveau mot de passe : </label>
        <input type="password" name="newPassword" id="newPassword" v-model="newPassword">
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirmer le mot de passe : </label>
        <input type="password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword">
      </div>
      <div class="form-group">
        <button v-show="!saving" @click="update">Enregistrer</button>
        <span v-show="saving">Enregistrement...</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const login = ref('')
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const error = ref('')
const success = ref('')
const saving = ref(false)
const update = async () => {
  saving.value = true
  if (newPassword.value !== confirmPassword.value) {
    error.value = 'Les mots de passe ne correspondent pas'
    saving.value = false
  }
  const token = localStorage.getItem('token')
  const verify = await store.dispatch('updateAdmin', { admin: { login: login.value, current: currentPassword.value, password: newPassword.value, token } })
  if (verify.err.length) {
    error.value = verify.err
  } else {
    success.value = 'Informations sauvegardées'
  }
  saving.value = false
}
</script>

<style scoped></style>
