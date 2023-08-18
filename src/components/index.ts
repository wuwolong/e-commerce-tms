import SvgIcon from '@/components/SvgIcon/index.vue'
const globalCpnsObj: { [props: string]: unknown } = { SvgIcon }
const globalCpnsObjKeys: string[] = Object.keys(globalCpnsObj)
export default {
  install(app: unknown) {
    globalCpnsObjKeys.forEach((key) => {
      ;(app as { component(...args: unknown[]): unknown }).component(
        key,
        globalCpnsObj[key],
      )
    })
  },
}
