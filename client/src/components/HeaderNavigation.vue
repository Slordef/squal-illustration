<template>
  <div class="header" :class="{open:opened}">
    <HeaderLogo />
    <nav>
      <div class="nav-elem"><router-link :to="{name:'Home'}">Accueil</router-link></div>
      <div class="nav-elem list-deroulante">
        <router-link :to="{name:'Gallery',params:{id:0}}">Galerie</router-link>
        <ul>
          <li class="nav-elem" v-for="c in choices" :key="'c'+c.index"><router-link :to="{name:'Gallery',params:{id:c.index}}">{{c.name}}</router-link></li>
        </ul>
      </div>
      <div class="nav-elem"><router-link :to="{name:'Projects'}">Projets</router-link></div>
      <div class="nav-elem"><router-link :to="{name:'Contact'}">Contact</router-link></div>
    </nav>
    <div class="menu" @click="open">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderLogo from '@/components/HeaderLogo.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { Category } from '@/intefaces/category'

const store = useStore()

const opened = ref(false)
const choices = computed(() => store.getters.getCategories?.filter((c: Category) => c.index !== '0') || [])
const open = () => { opened.value = !opened.value }
</script>

<style scoped></style>
