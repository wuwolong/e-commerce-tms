declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<
    { [props: unknown]: unknown },
    { [props: unknown]: unknown },
    any
  >
  export default component
}

declare let $store: any

// declare config
declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module '*.json'
declare module '@/components/SvgIcon'
