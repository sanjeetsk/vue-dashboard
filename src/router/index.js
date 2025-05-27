import { createRouter, createWebHistory } from 'vue-router'

// Views
import Dashboard from '../views/Dashboard.vue' // 👈 import Dashboard view

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard, // 👈 new dashboard route
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
