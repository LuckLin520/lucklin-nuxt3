import type { UseFetchOptions } from '#app'

export default async <T = any>(url: string, options: UseFetchOptions<T>) => {
  const { data, pending, error, refresh } = await useFetch<IRes<T>>(url, {
    ...(options as any),
    onRequest({ request, options }) {
      const headers = {
        authorization: '...'
      }
      options.headers = { ...options.headers, ...headers }
    }
  })
  if (error.value) {
    ElMessage({
      message: '服务端异常',
      type: 'warning'
    })
    throw new Error(error.value.message)
  }
  if (data.value?.code === 1000) {
    ElMessage({
      message: '登录过期',
      type: 'warning'
    })
    throw new Error(data.value.msg)
  }
  return { data, pending, refresh }
}
