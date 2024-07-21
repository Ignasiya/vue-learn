import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import('../components/CounterComp.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../components/UserList.vue')
  },
  {
    path: '/paginate/:pageNumber?',
    name: 'paginate',
    component: () => import('../components/PaginateComp.vue')
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
