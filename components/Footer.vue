<template>
  <div id="footer">
    <div class="footer_main">Footer</div>
    <FooterCopyright />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#footer {
  width: 100%;
  height: 200px;
  background-color: #a6aef8;
  .footer_main {
    width: $mainWidth;
    height: 100px;
    margin: 0 auto;
  }
}
</style>
