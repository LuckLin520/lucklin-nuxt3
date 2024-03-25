declare interface IRes<T = object> {
  code: string
  msg: string
  success: boolean
  data: T
}
