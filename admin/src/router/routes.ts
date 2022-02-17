import { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import GalleryView from '@/views/GalleryView.vue'
import SettingsView from '@/views/SettingsView.vue'
import ConnectionView from '@/views/ConnectionView.vue'
import store from '@/store'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Connection',
    component: ConnectionView,
    beforeEnter: (from, to, next) => {
      if (store.state.token === undefined) next()
      next({ name: 'Home' })
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    beforeEnter: (from, to, next) => {
      if (store.state.token !== undefined) next()
      next({ name: 'Connection' })
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: HomeView
      },
      {
        path: 'gallery',
        name: 'Gallery',
        component: GalleryView
      },
      {
        path: 'settings',
        name: 'Settings',
        component: SettingsView
      }
    ]
  }
]
