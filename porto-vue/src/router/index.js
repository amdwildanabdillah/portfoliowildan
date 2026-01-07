import { createRouter, createWebHistory } from 'vue-router'

// Import Halaman-halaman
import HomeView from '../views/HomeView.vue'
import CinematographyView from '../views/CinematographyView.vue'
import PhotographyView from '../views/PhotographyView.vue'
import DevelopmentView from '../views/DevelopmentView.vue'
import ResumeView from '../views/ResumeView.vue'

// 1. IMPORT HALAMAN ADMIN (INI TAMBAHANNYA)
import AdminView from '../views/AdminView.vue'

const router = createRouter({
  // Pake WebHistory biar URL bersih (tanpa tanda #)
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

    // 2. DAFTARKAN JALUR KHUSUS ADMIN DI SINI
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    }
  ],

  // Biar kalau pindah halaman, scroll balik ke paling atas
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
