import Request from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'
const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    //请求拦截器  获取token并配置在请求头上让以后每一次请求都携带token
    requestInterceptor(config) {
      const token = localCache.getCache('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch(err) {
      return Promise.reject(err)
    },
    responseInterceptor(res) {
      return res
    },
    responseInterceptorCatch(err) {
      return Promise.reject(err)
    },
  },
})
export default request
