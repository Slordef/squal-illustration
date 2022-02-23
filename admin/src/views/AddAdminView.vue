<template>
  <section class="connection_section">
    <div class="connection_box">
      <h1>Ajouter un administrateur</h1>
      <span class="connection_error" v-if="error.length">{{error}}</span>
      <input type="text" name="login" id="login" placeholder="Login" v-model="login">
      <input type="password" name="password" id="password" placeholder="Mot de passe" v-model="password">
      <input type="password" name="password" id="passwordConfirm" placeholder="Confirmation" v-model="passwordConfirm">
      <input type="text" name="token" id="token" placeholder="Token" v-model="token">
      <button v-show="!registering" @click="register">Enregistrer</button>
      <span v-show="registering">Enregistrement...</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const login = ref('')
const password = ref('')
const passwordConfirm = ref('')
const token = ref('')
const registering = ref(false)
const error = ref('')
const register = async () => {
  if (password.value !== passwordConfirm.value) {
    error.value = 'Les mots de passe ne correspondent pas'
    return
  }
  registering.value = true
  const valid: { err: string } = await store.dispatch('addAdmin', { register: { login: login.value, password: password.value, token: token.value } })
  if (!valid.err.length) {
    router.push({ name: 'Connection' })
  } else {
    error.value = valid.err
  }
  registering.value = false
}
</script>

<style scoped></style>
