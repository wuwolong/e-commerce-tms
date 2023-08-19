import { RouteRecordRaw } from 'vue-router'
let firstMenu: any = null
export default function mapMenusToRoutes(useMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []
  const allRouteFiles = require.context('../router/main', true, /\.ts$/)
  allRouteFiles.keys().forEach((item) => {
    const route = require('../router/main' + item.split('.')[1])
    // console.log(route.default)
    // console.log(allRouteFiles(item).default)
    allRoutes.push(route.default)
  })
  function _recurseGetRoute(menus: any[]) {
    menus.forEach((item) => {
      if (item.type === 1) {
        _recurseGetRoute(item.children)
      } else {
        const route = allRoutes.find((route) => {
          // console.log(route.path)
          return route.path === item.url
        })
        if (route) {
          if (!firstMenu) firstMenu = route
          routes.push(route)
        }
      }
    })
  }
  _recurseGetRoute(useMenus)
  return routes
}

export function pathMapToMenu(
  url: string,
  userMenus: any,
  breadcrumbNames?: any[]
): any {
  function _recurseGetMenu(userMenus: any) {
    for (const menu of userMenus || []) {
      if (menu.type == 1) {
        const findMenu: any = _recurseGetMenu(menu.children)
        if (findMenu) {
          breadcrumbNames?.push(menu.name)
          breadcrumbNames?.push(findMenu.name)
          return findMenu
        }
      } else {
        if (menu.type === 2 && menu.url == url) {
          return menu
        }
      }
    }
  }
  return _recurseGetMenu(userMenus)
}

export function pathMapBreadcrumbs(
  url: string,
  userMenus: any,
  breadcrumbNames: any[] = []
): any {
  pathMapToMenu(url, userMenus, breadcrumbNames)
  // console.log(breadcrumbNames)
  return breadcrumbNames
}

export function menusMapPermissions(userMenus: any[]): string[] {
  const permissions: string[] = []
  function _recurseGetPermissions(userMenus: any[]) {
    for (const menu of userMenus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermissions(menu.children || [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermissions(userMenus)
  return permissions
}
export function menusMapCheckKeys(menuList: any[]): any[] {
  const arr: any[] = []
  function _recurseGetCheckKeys(menuList: any[]) {
    for (const item of menuList) {
      if (item.children) {
        _recurseGetCheckKeys(item.children)
      } else {
        arr.push(item.id)
      }
    }
  }
  _recurseGetCheckKeys(menuList)
  return arr
}
export { firstMenu }
