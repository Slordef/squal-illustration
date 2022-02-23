<template>
  <section class="connection_section">
    <div class="connection_box">
      <h1>Connexion</h1>
      <span class="connection_error" v-if="error.length">{{error}}</span>
      <input type="text" name="login" id="login" placeholder="Login" v-model="login">
      <input type="password" name="password" id="password" placeholder="Mot de passe" v-model="password">
      <button v-show="!connecting" @click="connect">Connexion</button>
      <span v-show="connecting">Connexion...</span>
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
const connecting = ref(false)
const error = ref('')
const connect = async () => {
  connecting.value = true
  const valid: { err: string } = await store.dispatch('connection', { connection: { login: login.value, password: password.value } })
  if (!valid.err.length) {
    router.push({ name: 'Home' })
  } else {
    error.value = valid.err
  }
  connecting.value = false
}
</script>

<style scoped></style>
