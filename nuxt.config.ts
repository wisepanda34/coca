// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint2'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  typescript: {
    typeCheck: false,
    strict: true
  },
  app: {
    baseURL: '/coca/',
    pageTransition: { name: 'page-fade', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Coca',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' }]
    }
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/eslint-module',
    '@nuxt/eslint'
  ],
  css: ['~/assets/scss/main.scss'],
  vite: {
    plugins: [eslintPlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/variebles.scss";
            @import "@/assets/scss/animation.scss";
          `
        }
      }
    }
  }
})
