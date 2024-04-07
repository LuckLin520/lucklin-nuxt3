<template>
  <div id="default_layout">
    <Header />
    <main id="main">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
// 默认default.vue不支持scss语法，可能是bug
#default_layout {
  #main {
    width: $mainWidth;
    margin: 0 auto;
  }
}
</style>
