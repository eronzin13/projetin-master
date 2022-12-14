import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TelaFilmes from '../views/TelaFilmes.vue'
import TelaSeries from '../views/TelaSeries.vue'
import InfoFilmes from '../views/InfoFilmes.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/novidades',
      name: 'novidades',
      component: TelaFilmes
    },
    {
      path: '/series',
      name: 'series',
      component: TelaSeries
    },
    {
      path: '/info',
      name: 'info',
      component: InfoFilmes
    },
    
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    
  ]
})

export default router
