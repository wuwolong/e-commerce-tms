import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface WLRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => Promise<any>
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => Promise<any>
}
//拓展参数config，可以传入拦截器中的四种回调函数
export interface WLAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: WLRequestInterceptors<T>
}
