<template>
  <NuxtLoadingIndicator />
  <el-config-provider :locale="zhCn">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'

useSeoMeta({
  title: 'Nuxt 3 + TypeScript + Tailwind CSS',
  description: 'Nuxt 3 + TypeScript + Tailwind CSS',
  keywords: 'Nuxt 3, TypeScript, Tailwind CSS'
})
</script>
<style lang="scss"></style>
