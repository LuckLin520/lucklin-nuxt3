<template>
  <div>
    首页
    <el-button type="primary">主要按钮</el-button>
    <el-icon-plus :style="{ width: 20 }" />

    <el-button @click="onEnquiry()"> 询价</el-button>
    <el-button @click="onUserCreate()"> 创建用户</el-button>
    <el-button @click="onPostCreate()"> 创建帖子</el-button>
    <el-button @click="onPostPage()"> 查询帖子</el-button>
  </div>
</template>

<script setup lang="ts">
import type { PostPageItem } from '~/server/api/post/types'

const onEnquiry = async () => {
  const body = { phone: '13812345678' }
  const res = await useWrapFetch('/api/enquiry/create', { method: 'POST', body })
  console.log(res)
}
const onUserCreate = async () => {
  const res = await useWrapFetch('/api/user/create', { method: 'POST' })
  console.log(res)
}
const onPostCreate = async () => {
  const res = await useWrapFetch('/api/post/create', { method: 'POST' })
  console.log(res)
}
const onPostPage = async () => {
  const res = await useWrapFetch<IPage<PostPageItem>>('/api/post/page', { method: 'POST' })
  console.log(res)
}
</script>

<style lang="scss" scoped></style>
