import { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import GalleryView from '@/views/GalleryView.vue'
import SettingsView from '@/views/SettingsView.vue'
import ConnectionView from '@/views/ConnectionView.vue'
import AddAdminView from '@/views/AddAdminView.vue'
import store from '@/store'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Connection',
    component: ConnectionView,
    beforeEnter: async (from, to, next) => {
      const token = localStorage.getItem('token')
      if (token) await store.dispatch('connection', { token })
      if (store.state.token === undefined) return next()
      next({ name: 'Home' })
    }
  },
  {
    path: '/addadmin',
    name: 'AddAdmin',
    component: AddAdminView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    beforeEnter: async (from, to, next) => {
      if (store.state.token !== undefined) return next()
      const token = localStorage.getItem('token')
      if (token) await store.dispatch('connection', { token })
      if (store.state.token !== undefined) return next()
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
  },
  {
    path: '/:pathMath(.*)*',
    redirect: { name: 'Home' }
  }
]
