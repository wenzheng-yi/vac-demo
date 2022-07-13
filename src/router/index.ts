import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../pages/index.vue'),
    },
    {
      path: '/name',
      component: () => import('../pages/name.vue')
    },
    {
      path: '/param',
      component: () => import('../pages/param.vue'),
    },
    {
      path: '/max',
      component: () => import('../pages/max.vue'),
    },
    {
      path: '/props',
      component: () => import('../pages/props.vue'),
    },
  ],
})
export default router
