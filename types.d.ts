declare interface ZcResponse {
  code: string
  status: boolean
  msg: string
  data: object | array
}

declare interface ZcPagination {
  pageNo: number
  pageSize: number
  pageTotal: number
  total: number
  status: boolean
  data: array<object>
}
