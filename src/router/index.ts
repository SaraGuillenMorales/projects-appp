import ProjectsLayout from '@/modulorum/projects/layouts/ProjectsLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {name: 'proyects'},
      component: ProjectsLayout,
      children: [
        {
          path: 'proyects',
          name: 'proyects',
          component: () => import('@/modulorum/projects/views/ProjectsViews.vue')
        }
      ]
    }
  ],
})

export default router
