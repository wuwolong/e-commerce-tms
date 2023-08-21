import request from '../index'
import { ReqLoginParams, ResLoginData } from './type'

enum USERAPI {
  AccountLogin = 'user/login',
  UserInfo = 'user/info',
}

export function reqLogin(data: ReqLoginParams): Promise<ResLoginData> {
  return request.post<ResLoginData>({
    url: USERAPI.AccountLogin,
    data,
  })
}

export function reqGetUserInfo(): Promise<ResLoginData> {
  return request.get<ResLoginData>({
    url: USERAPI.UserInfo,
  })
}
