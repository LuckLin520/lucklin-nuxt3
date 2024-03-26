import type { UseFetchOptions } from '#app'

/* eslint-disable */
type Param1Type = typeof useFetch extends (param1: infer P1, param2: any) => any ? P1 : never;
type Param2Type = typeof useFetch extends (param1: any, param2: infer P2) => any ? P2 : never;
export const useWrapFetch = <T = any>(url: Param1Type, options: Param2Type) => {
  return useFetch<IRes<T>>(url, {
    ...options as any,
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
      if (!response._data.success) {
        ElMessage({
          message: response._data.msg,
          type: 'warning'
        })
      }
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
