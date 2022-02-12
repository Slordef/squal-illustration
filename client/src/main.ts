import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3TouchEvents from 'vue3-touch-events'

createApp(App).use(Vue3TouchEvents).use(store).use(router).mount('#app')
