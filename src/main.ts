import 'virtual:svg-icons-register'

import '@/styles/index.scss'
import request from './service'
request.request({
  url: 'user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111',
  },
})
import { createApp } from 'vue'
import App from '@/App.vue'
createApp(App).mount('#app')
