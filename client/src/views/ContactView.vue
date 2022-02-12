<template>
  <section class="contact">
    <div class="contact_title">
      <h3>Contact</h3>
    </div>
    <div class="contact_content">
      <form id="contact_formulaire" class="form" @submit.prevent="send">
        <div class="contact_status">
          <transition name="contact_fade">
            <div v-if="success" class="success">Message envoyé</div>
            <div v-if="!success" class="error">{{error}}</div>
          </transition>
        </div>
        <div class="form-group">
          <label class="label" for="name">Nom</label>
          <input class="input" type="text" name="name" placeholder="Nom" id="name" value="" v-model="name">
        </div>
        <div class="form-group">
          <label class="label" for="email">Email</label>
          <input class="input" type="email" name="email" id="email" placeholder="Email" value="" v-model="email">
        </div>
        <div class="form-group">
          <label class="label" for="text">Message</label>
          <textarea class="textarea" name="area" id="text" cols="30" rows="10" v-model="message"></textarea>
        </div>
        <VueRecaptcha class="captcha"
                      sitekey="6Lfu9bUUAAAAAFQcnfx6Xu3hSLGnsDzLY2bwzppc"
                      @verify="onVerify"
                      @expired="onExpired"
        ></VueRecaptcha>
        <div class="form-group">
          <input :disabled="sending" class="input" type="submit" value="Envoyer">
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueRecaptcha } from 'vue-recaptcha'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const name = ref('')
const email = ref('')
const message = ref('')
const success = ref(false)
const sending = ref(false)
const error = ref('')
const recaptcha = ref('')

const onVerify = (response: string) => { recaptcha.value = response }
const onExpired = () => { recaptcha.value = '' }
const response = function () {
  console.log(arguments)
}
const send = () => {
  sending.value = true
  const data = { name: name.value, email: email.value, message: message.value, recaptcha: recaptcha.value }
  store.dispatch('sendContactMessage', data).then(response)
}
</script>

<style scoped></style>
