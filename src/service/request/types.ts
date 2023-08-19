import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
export interface InterceptorInterface {
  ReqInterceptor: (
    config: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig
  ResInterceptor: (res: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>
  ReqErrorCatchInterceptor: (
    err: AxiosError,
  ) => AxiosError | Promise<AxiosError>
  ResErrorCatchInterceptor: (
    err: AxiosError,
  ) => AxiosError | Promise<AxiosError>
}
export default interface RequestConfigInterface extends AxiosRequestConfig {
  interceptors?: InterceptorInterface
  loading?: any
}
