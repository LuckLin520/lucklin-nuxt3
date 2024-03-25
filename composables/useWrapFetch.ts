import type { UseFetchOptions } from '#app'

/* eslint-disable */
export const useWrapFetch: typeof useFetch = (url, options) => {
  return useFetch(url, {
    ...options,
    onRequest({ request, options }) {
      console.log('req')
      const headers = {
        authorization: '...'
      }
      options.headers = { ...options.headers, ...headers }
    },
    onRequestError({ request, options, error }) {
      // 处理请求错误
      console.log('req error')
    },
    onResponse({ request, response, options }) {
      // 处理响应数据
      console.log('res')
    },
    onResponseError({ request, response, options }) {
      // 处理响应错误
      console.log('res error')
      ElMessage({
        message: '服务端异常',
        type: 'warning'
      })
    }
  })
}
