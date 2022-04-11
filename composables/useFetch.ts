import type { FetchOptions, FetchResponse } from 'ohmyfetch'

interface Options extends FetchOptions {
  payload?: object
}

export function useFetch<T>(url: string, options: Options): Promise<FetchResponse<T>> {
  const defaultOptions = {
    baseURL: 'http://192.168.0.99:18189',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    onRequest({ options }) {
      const token = useUserStore().token
      options.headers.token = token
    },
    onResponse({ request, response, options }) {
      console.log('[fetch response]', request, response)
    },
    onResponseError({ request, response, options }) {
      // Log error
      console.log('[fetch response error]', request, response.status, response.body)
    },
    onRequestError({ request, options, error }) {
      // Log error
      console.log('[fetch request error]', request, error)
    }
  }
  options = <Options>{ ...defaultOptions, ...options }

  function stringify(obj: object, sep?: string, eq?: string) {
    sep = sep || '&'
    eq = eq || '='
    let str = ''
    for (const k in obj) {
      str += k + eq + obj[k] + sep
    }
    return str.slice(0, -1)
  }
  const { method, payload } = options

  if (!method || method === 'GET') {
    url += `${url.includes('?') ? '&' : '?'}${stringify(payload)}`
  } else {
    options.body = payload
    delete options.payload
  }

  return $fetch.raw(url, options)
}
