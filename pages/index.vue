<template>
  <div>
    <div v-if="!showTest">home</div>
    <LazyTestCom v-else />
    <button @click="showTest = !showTest">哈哈哈</button>
    <p>{{ user.token }}</p>
    <button @click="user.token = '998'">change token</button>
    <nuxt-link to="/default">go default</nuxt-link>

    <button @click="onRefresh">登录</button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'zcw'
})
const user = useUserStore()
const showTest = ref(false)

const { pending, refresh, error } = await useAsyncData('login', () => {
  return user.login({
    userAccount: '15348298177',
    userPwd: 'a123123',
    userType: 0
  })
})

const onRefresh = async () => {
  console.log('idnex', process.env.NODE_ENV)
  await refresh()
  console.log(user.token)
}
</script>

<style scoped></style>
