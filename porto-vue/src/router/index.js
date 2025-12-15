import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CinematographyView from '../views/CinematographyView.vue'

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
    }
  ],

  // === INI OBATNYA MAS ===
  scrollBehavior(to, from, savedPosition) {
    // 1. Kalau linknya pakai pagar (#), scroll ke elemen itu (misal #about)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // 2. Kalau pencet tombol Back, balik ke posisi sebelumnya
    if (savedPosition) {
      return savedPosition
    }

    // 3. Kalau buka halaman baru, PAKSA KE ATAS (0,0)
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
