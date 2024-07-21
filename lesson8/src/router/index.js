import { createRouter, createWebHistory } from 'vue-router'

import DashBoard from '@/pages/DashBoard.vue'
import AboutContent from '@/pages/AboutContent.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  { path: '/dashboard', component: DashBoard },
  { path: '/about', component: AboutContent },
  { path: '/404', component: NotFound },
  { path: '*', redirect: '/404' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
