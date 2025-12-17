// 1. GANTI import: Pake 'createWebHashHistory' (Pake Hash)
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CinematographyView from '../views/CinematographyView.vue'
import PhotographyView from '../views/PhotographyView.vue'
import DevelopmentView from '../views/DevelopmentView.vue'
import ResumeView from '../views/ResumeView.vue'


const router = createRouter({
  // 2. GANTI history: Pake createWebHashHistory()
  // Ini kuncinya biar GitHub Pages gak 404 pas di-refresh
  history: createWebHashHistory(import.meta.env.BASE_URL),

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
    {
      path: '/development',
      name: 'development',
      component: DevelopmentView
    },
    {
    path: '/resume',
    name: 'resume',
    component: ResumeView
},
  ],

  // Script Scroll Otomatis (Tetap aman)
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
