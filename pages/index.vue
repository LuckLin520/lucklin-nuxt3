<template>
  <div>
    首页
    <el-button type="primary">主要按钮</el-button>
    <el-icon-plus :style="{ width: 20 }" />

    <client-only>
      <el-button @click="toggleDark()"> {{ isDark ? '关闭' : '开启' }}</el-button>
    </client-only>

    <p>{{ userStore.token }}</p>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const userStore = useUserStore()
await sleep(1000)
userStore.login(123)

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style lang="scss" scoped></style>
