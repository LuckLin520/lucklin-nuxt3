<template>
  <div>about {{ abc }}</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'about'
})
const abc = ref(0)
</script>

<style scoped></style>
