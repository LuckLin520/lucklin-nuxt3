export default defineStore('user', {
  state() {
    return {
      token: '5556666'
    }
  },
  actions: {
    async login(payload: any) {
      this.token = payload
    }
  }
})
