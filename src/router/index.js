import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpotifyView from '../views/Spotify.vue'
//import ResumeView from '../views/Resume.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/spotify',
      name: 'spotify',
      component: SpotifyView,
    },
    {
      path: '/zivotopis',
      name: 'resume',
      component: () => import('../views/ResumeView.vue'),
    },
  ],
})

export default router
