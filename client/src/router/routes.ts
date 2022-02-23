import { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GalleryView from '@/views/GalleryView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import Error404View from '@/views/Error404View.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/gallery/:id', name: 'Gallery', component: GalleryView, props: true },
  { path: '/projects', name: 'Projects', component: ProjectsView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/:pathMatch(.*)*', name: '404', component: Error404View }
]
