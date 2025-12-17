import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CinematographyView from '../views/CinematographyView.vue'
import PhotographyView from '../views/PhotographyView.vue'
import DevelopmentView from '../views/DevelopmentView.vue' // <--- 1. Ini Import Baru

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cinematography',
      name: 'cinematography',
      component: CinematographyView
    },
    {
      path: '/photography',
      name: 'photography',
      component: PhotographyView
    },
    // --- 2. INI ROUTE BARUNYA ---
    {
      path: '/development',
      name: 'development',
      component: DevelopmentView
    }
  ],

  // Script Scroll Otomatis (Jangan Dihapus)
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
