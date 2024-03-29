// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      meta: [{ name: 'google', content: `notranslate` }]
    }
  },
  modules: ['@element-plus/nuxt', '@pinia/nuxt', '@nuxtjs/sitemap', 'nuxt-simple-robots'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/css/element-variables.scss" as element;`
        }
      }
    }
  },
  elementPlus: {
    icon: 'el-icon',
    importStyle: 'scss',
    themes: ['dark']
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  sitemap: {
    enabled: true,
    autoLastmod: true
  },
  robots: {},
  site: {
    indexable: process.env.NUXT_ENV === 'test'
  }
})
