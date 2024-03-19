const jsonParse = (data: any): any => {
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

export class StorageCache {
  private static store = window.localStorage

  protected static excludeKeys = ['excludeKeys']

  public static set(key: string, value: any) {
    StorageCache.store.setItem(key, JSON.stringify(value))
  }

  public static get(key: string) {
    const value = StorageCache.store.getItem(key)
    return value ? jsonParse(value) : value
  }

  public static remove(key: string) {
    StorageCache.store.removeItem(key)
  }

  public static clear(isAll = false) {
    const excludeMaps: Record<string, any> = {}
    if (!isAll) {
      StorageCache.excludeKeys.forEach((key: string) => (excludeMaps[key] = StorageCache.get(key)))
    }
    StorageCache.store.clear()
    if (!isAll) {
      for (const key in excludeMaps) {
        const val = excludeMaps[key]
        if (Object.hasOwn(excludeMaps, key) && val !== void 0) {
          StorageCache.set(key, val)
        }
      }
    }
  }
}
