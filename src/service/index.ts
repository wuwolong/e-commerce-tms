/**
 * 需求请求拦截相应拦截 请求拦截有token验证 有loading
 * 实现一次封装多次使用
 * 重写get request post delete等方法
 * 架构 两层封装
 */
import { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { ElLoading } from 'element-plus'
import Request from './request'
const request = new Request({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
  interceptors: {
    ReqInterceptor: (config: InternalAxiosRequestConfig) => {
      const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
      config.headers.Authorization = 'Bearer '
      return config
    },
    ReqErrorCatchInterceptor: (err: any) => Promise.reject(err),
    ResInterceptor: (res: AxiosResponse) => {
      return res
    },
    ResErrorCatchInterceptor: (err: any) => Promise.reject(err),
  },
})
export default request
