<template>
  <div>
    首页
    <el-button type="primary">主要按钮</el-button>
    <Icon name="uil:github" />

    <el-button @click="onEnquiry()"> 询价</el-button>
    <el-button @click="onEnquiry2()"> 搜索</el-button>
    <el-date-picker></el-date-picker>
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
