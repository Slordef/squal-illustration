<template>
  <section class="connection_section">
    <div class="connection_box">
      <h1>Connexion</h1>
      <input type="text" name="login" id="login" placeholder="Login" v-model="login">
      <input type="password" name="password" id="password" placeholder="Mot de passe" v-model="password">
      <button @click="connect">Connexion</button>
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
const connect = () => {
  store.dispatch('connection')
  router.push({ name: 'Home' })
}
</script>

<style scoped></style>
