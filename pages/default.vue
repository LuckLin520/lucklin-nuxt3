<template>
  <div>
    <div>default page</div>
    <p>{{ user.token }}</p>
    <button @click="user.token = '555'">change token</button>
    <button @click="$router.go(-1)">返回</button>
  </div>
</template>
<script lang="ts" setup>
const user = useUserStore()
</script>
