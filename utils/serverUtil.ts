interface CacheItem {
  value: string
  expiryTimestamp: number
}
export class ServerCache {
  private static cache: Record<string, CacheItem> = {}

  static set(key: string, value: string, expireSecond: number) {
    if (!expireSecond || expireSecond < 0) throw new Error('expireSecond must be a positive number')
    const currentTime = new Date().getTime()
    const expiryTimestamp = currentTime + expireSecond * 1000 // 计算过期时间的时间戳
    this.cache[key] = {
      value,
      expiryTimestamp
    }
  }

  static get(key: string) {
    const cacheItem = this.cache[key]
    if (cacheItem) {
      const currentTime = new Date().getTime()
      if (currentTime <= cacheItem.expiryTimestamp) {
        return cacheItem.value
      } else {
        // 缓存已过期，删除该缓存项
        delete this.cache[key]
      }
    }
    return undefined // 缓存不存在或已过期
  }

  static getExpiryTime(key: string) {
    const cacheItem = this.cache[key]
    if (cacheItem) {
      return cacheItem.expiryTimestamp
    }
    return null // 缓存不存在
  }
}
