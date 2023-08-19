import SvgIcon from '@/components/SvgIcon'
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
