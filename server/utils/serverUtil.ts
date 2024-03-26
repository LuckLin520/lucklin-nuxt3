import { CodeEnum } from '~/utils/enums'

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

export class R {
  private code: number = 0
  private success: boolean = true
  private msg?: string
  private data: any
  static ok(data?: any) {
    const r = new R()
    r.msg = '成功'
    r.data = data
    return r
  }
  static err(data?: any) {
    const r = new R()
    r.code = CodeEnum.FAIL
    r.success = false
    r.msg = '失败'
    r.data = data
    return r
  }
  setMsg(msg: string) {
    this.msg = msg
    return this
  }
}
export class PageVo<T = any> {
  private current: number
  private size: number
  private pages: number
  private total: number
  private records: T[]

  constructor(current: number, size: number, total: number, records: T[]) {
    this.current = current
    this.size = size
    this.pages = Math.ceil(total / size)
    this.total = total
    this.records = records
  }
  static create<T = any>(current: number, size: number, total: number, records: T[]) {
    return new PageVo<T>(current, size, total, records)
  }
}
