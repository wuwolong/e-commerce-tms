export interface ReqLoginParams {
  username: string
  password: string
}

export interface ResLoginData {
  code: number
  data: {
    token: string
  }
}

const userInfoDataType = {
  userId: 1,
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  username: 'admin',
  password: '111111',
  desc: '平台管理员',
  roles: ['平台管理员'],
  buttons: ['cuser.detail'],
  routes: ['home'],
  token: 'Admin Token',
}
export interface ResUserInfoData {
  code: number
  data: {
    checkUser?: typeof userInfoDataType
    message?: '获取用户信息失败'
  }
}
