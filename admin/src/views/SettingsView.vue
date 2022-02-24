<template>
  <section>
    <div class="form settings">
      <div style="margin: 10px 0">
        <label>Text de page d'accueil</label>
      </div>
      <div style="margin: 10px 0">
        <button @click="save">Enregistrer</button>
      </div>
      <div class="form-group">
        <div id="editor" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Quill from 'quill'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { Settings } from '@/intefaces/settings'

const store = useStore()

const getSettings = () => {
  store.dispatch('getAllSettings')
}
getSettings()

const settings = computed<Settings>(() => store.getters.getSettings)
const homeText = ref(store.getters.getSettings?.homeText || '')

onMounted(() => {
  const editor = new Quill('#editor', {
    theme: 'snow'
  })
  editor.root.innerHTML = homeText.value
  editor.on('text-change', () => {
    homeText.value = editor.root.innerHTML
  })
})
const save = () => {
  const set = { ...settings.value }
  set.homeText = homeText.value
  store.dispatch('setSettings', { settings: set })
}

</script>

<style scoped></style>
