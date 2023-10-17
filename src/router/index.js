import CreateCasePage from '@/views/CreateCasePage.vue';
import ListCasesPage from '@/views/ListCasesPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListCasesPage
    },
    {
      path: '/create',
      name: 'create',
      component: CreateCasePage
    },
  ]
})

export default router
