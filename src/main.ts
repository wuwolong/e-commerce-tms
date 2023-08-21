import 'virtual:svg-icons-register'
import '@/styles/index.scss'

import { createApp } from 'vue'
import router from './router'
import pinia from './store'
import App from '@/App.vue'
createApp(App).use(pinia).use(router).mount('#app')
