<template>
  <div>
    首页
    <el-button type="primary">主要按钮</el-button>
    <el-icon-plus :style="{ width: 20 }" />

    <el-button @click="onEnquiry()"> 询价</el-button>
    <el-button @click="onEnquiry2()"> 搜索</el-button>
  </div>
</template>

<script setup lang="ts">
const onEnquiry = async () => {
  const body = { phone: '13812345678' }
  const res = await useApiFetch('/api/enquiry/create', { method: 'POST', body })
  console.log(res)
}
const onEnquiry2 = async () => {
  const body = { phone: '13812345678' }
  const res = await useApiFetch('/', { method: 'GET' })
  console.log(res)
}
</script>

<style lang="scss" scoped></style>
