import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state() {
    return {
      token: '5556666'
    }
  },
  actions: {
    async login(payload: object) {
      const { _data } = await useFetch<ZcResponse>('/account/login', { method: 'POST', payload })
      if (_data.status) {
        this.token = _data.data.header_token
      }
    }
  }
})
