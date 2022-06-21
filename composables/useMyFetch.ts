import type { FetchOptions, FetchResponse } from 'ohmyfetch'

export function useMyFetch<T>(url: string, options: FetchOptions): Promise<FetchResponse<T>> {
  const controller = new AbortController()
  setTimeout(() => {
    controller.abort()
  }, 1000)

  const defaultOptions: FetchOptions = {
    baseURL: 'http://192.168.0.99:18189',
    signal: controller.signal,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    async onRequest({ options }) {
      const token = useUserStore().token
      options.headers['token'] = token
    },
    async onResponse({ request, response, options }) {
      if (process.client) console.log('[fetch response]', request, response)
    },
    async onResponseError({ request, response, options }) {
      if (process.client) console.log('[fetch response error]', request, response.status, response.body)
    },
    async onRequestError({ request, options, error }) {
      if (process.client) console.log('[fetch request error]', request, error)
    }
  }
  options = { ...defaultOptions, ...options }
  return $fetch.raw(url, options)
}
