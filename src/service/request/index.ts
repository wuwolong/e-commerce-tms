import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { WLRequestInterceptors, WLAxiosRequestConfig } from './type'
// import { ElLoading } from 'element-plus'
// import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

class WLRequest {
  instance: AxiosInstance
  interceptors?: WLRequestInterceptors
  loading: any
  constructor(config: WLAxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    )
    //2.所有实例都有的拦截器，也就是类的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // this.loading = ElLoading.service({
        //   lock: true,
        //   text: 'Loading',
        //   background: 'rgba(0, 0, 0, 0.7)'
        // })
        return config
      },
      (err) => {
        this.loading?.close()
        return Promise.reject(err)
      },
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res.data
      },
      (err) => {
        this.loading?.close()
        return Promise.reject(err)
      },
    )
  }
  request<T>(config: WLAxiosRequestConfig<T>): Promise<T> {
    return new Promise((resolve, rejcet) => {
      //对单个请求拦截器的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config)
        // console.log(config)
      }
      this.instance
        .request<any, T, any>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          rejcet(err)
        })
    })
  }
  get<T = any>(config: WLAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: WLAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: WLAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: WLAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default WLRequest
