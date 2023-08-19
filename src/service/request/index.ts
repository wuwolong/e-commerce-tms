import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import RequestConfigInterface, { InterceptorInterface } from './types.ts'
import { ElLoading } from 'element-plus'
export default class Request {
  instance: AxiosInstance
  interceptors?: InterceptorInterface
  loading?: any
  constructor(config: RequestConfigInterface) {
    this.instance = axios.create(config)
    this.interceptors = config?.interceptors
    this.loading = config?.loading
    this.instance.interceptors.request.use(
      this.interceptors?.ReqInterceptor,
      this.interceptors?.ReqErrorCatchInterceptor,
    )
    this.instance.interceptors.response.use(
      this.interceptors?.ResInterceptor,
      this.interceptors?.ResErrorCatchInterceptor,
    )
    this.instance.interceptors.request.use(
      (config: any) => {
        this.loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)',
        })
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

  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
  get(config: AxiosRequestConfig) {
    return this.instance.get(config as string)
  }
  post(config: AxiosRequestConfig) {
    return this.instance.post(config as string)
  }
  delete(config: AxiosRequestConfig) {
    return this.instance.delete(config as string)
  }
  patch(config: AxiosRequestConfig) {
    return this.instance.patch(config as string)
  }
}
