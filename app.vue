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
useHead({
  script: [{ src: 'http://api.tianditu.gov.cn/api?v=4.0&tk=f173fa0cb66dc0f7f4c0e0eaf9454987', type: 'text/javascript' }]
})
useSeoMeta({
  title: 'Nuxt 3 + TypeScript + Tailwind CSS',
  description: 'Nuxt 3 + TypeScript + Tailwind CSS',
  keywords: 'Nuxt 3, TypeScript, Tailwind CSS'
})
</script>
<style lang="scss"></style>
