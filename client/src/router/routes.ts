import { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Error404View from '@/views/Error404View.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '*', name: '404', component: Error404View }
]
