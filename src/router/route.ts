import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
]

export default routes
