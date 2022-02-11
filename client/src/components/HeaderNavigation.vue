<template>
  <div class="header" :class="{open:opened}">
    <Logo />
    <nav>
      <div class="nav"><router-link @click="open" :to="{name:'accueil'}">Accueil</router-link></div>
      <div class="nav list-deroulante">
        <router-link @click="open" :to="{name:'galerie',params:{id:0}}">Galerie</router-link>
        <ul>
          <li class="nav" v-for="c in choices" :key="'c'+c.id"><router-link @click="open" :to="{name:'galerie',params:{id:c.id}}">{{c.name}}</router-link></li>
        </ul>
      </div>
      <div class="nav"><router-link @click="open" :to="{name:'projetsunderconstruction'}">Projets</router-link></div>
      <div class="nav"><router-link @click="open" :to="{name:'contact'}">Contact</router-link></div>
    </nav>
    <div class="menu" @click="open">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
