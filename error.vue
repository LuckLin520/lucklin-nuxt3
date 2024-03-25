<template>
  <div class="error-container">
    <h1>{{ error?.statusCode }}</h1>
    <p class="error-message">{{ messageMap[error?.statusCode!] }}</p>
    <el-button @click="buttonHandlerMap[error?.statusCode!]">{{ buttonTextMap[error?.statusCode!] }}</el-button>
  </div>
</template>
<script setup lang="ts">
const error = useError()
const router = useRouter()
const messageMap: { [key: number]: string } = {
  404: '抱歉，您访问的页面不存在。'
}
const buttonHandlerMap: { [key: number]: () => void } = {
  404: () => {
    router.go(-1)
  }
}
const buttonTextMap: { [key: number]: string } = {
  404: '返回'
}
</script>
<style lang="scss" scoped>
.error-container {
  text-align: center;
  margin-top: 20vh;
}

.error-message {
  margin: 20px 0;
  color: #333;
}
</style>
