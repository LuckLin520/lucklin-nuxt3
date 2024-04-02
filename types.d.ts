// eslint-disable-next-line prettier/prettier
export { }
declare global {
  interface Window {
    T: any
  }
}
declare interface IRes<T = object> {
  code: number
  msg?: string
  success: boolean
  data?: T
}
declare interface IPage<T = object> {
  current: number
  size: number
  pages: number
  total: boolean
  records: T[]
}
