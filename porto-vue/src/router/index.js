import { createRouter, createWebHistory } from 'vue-router'
// Ini manggil file Home & Cinema yang barusan kamu buat
import HomeView from '../views/HomeView.vue'
import CinematographyView from '../views/CinematographyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView // <-- Pasang Home di sini
    },
    {
      path: '/cinematography',
      name: 'cinematography',
      component: CinematographyView // <-- Pasang Cinema di sini
    }
  ]
})

export default router
