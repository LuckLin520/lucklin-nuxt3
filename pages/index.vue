<template>
  <div>
    首页
    <el-button type="primary">主要按钮</el-button>
    <el-icon :size="20"><Plus /></el-icon>
    <p>{{ userStore.token }}</p>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
const userStore = useUserStore()
await sleep(5000)
userStore.login(123)
</script>

<style lang="scss" scoped></style>
