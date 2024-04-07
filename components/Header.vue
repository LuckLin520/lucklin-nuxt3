<template>
  <header id="header">
    <div class="header_left">
      <h1 class="logo">LOGO</h1>
      <nav class="nav">
        <NuxtLink to="/">首页</NuxtLink>
        <NuxtLink to="/abouts">关于我们</NuxtLink>
        <NuxtLink to="/services">服务项目</NuxtLink>
        <NuxtLink to="/cases">保函案例</NuxtLink>
      </nav>
    </div>
    <div class="header_right">
      <Icon name="uil:github" />
      <span class="tel">12345678</span>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#header {
  width: $mainWidth;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: var(--el-color-primary);
  .header_left {
    display: flex;
    align-items: center;
    .logo {
      font-size: 24px;
      font-weight: bold;
    }

    .nav {
      margin-left: 20px;
      font-size: 14px;
      a {
        margin-right: 20px;
        color: #333;
        text-decoration: none;
      }
    }
  }
  .header_right {
    display: flex;
    align-items: center;
    .tel {
      margin-left: 10px;
    }
  }
}
</style>
