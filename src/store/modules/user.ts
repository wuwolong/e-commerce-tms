// @ts-check
import { reqLogin } from '@/service/user'
import { ReqLoginParams } from '@/service/user/type'
import { defineStore, acceptHMRUpdate } from 'pinia'
import router from '@/router'
import { localCache, getTime } from '@/utils'
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: '',
  }),

  actions: {
    logout() {
      localCache.deleteCache('token')
      this.$patch({
        token: '',
      })
    },

    async login(data: ReqLoginParams) {
      const {
        code,
        data: { token },
      } = await reqLogin(data)
      if (code === 200) {
        localCache.setCache('token', token)
        this.$patch({ token })
        ElNotification({
          title: 'login successfully',
          message: getTime(),
          type: 'success',
        })
        router.push('/')
      } else {
        ElMessage({
          message: 'The account or password is incorrect',
          type: 'error',
        })
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
