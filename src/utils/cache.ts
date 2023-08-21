class LocalCache {
  setCache(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string): any {
    const value = window.localStorage.getItem(key)
    if (value) return JSON.parse(value)
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}
export const localCache = new LocalCache()
export default localCache
