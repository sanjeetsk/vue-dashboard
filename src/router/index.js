import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',                 // 👈 Dashboard now loads at root path
    name: 'Dashboard',
    component: Dashboard
  },

  // Optional: Redirect /dashboard to /
  {
    path: '/dashboard',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
