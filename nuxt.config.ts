import { defineNuxtConfig } from 'nuxt'
console.log(process.env.NODE_ENV)

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt']
})
