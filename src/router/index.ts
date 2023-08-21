import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './route'
import { localCache } from '@/utils'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach(async (to, from) => {
  const token = localCache.getCache('token')
  if (!token && to.name !== 'Login') {
    return { name: 'Login' }
  }
})
export default router
