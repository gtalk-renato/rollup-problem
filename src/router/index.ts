import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: () => import('@/views/SignInPage.vue')
    }
  ]
})

export default router
