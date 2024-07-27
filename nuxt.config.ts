// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true , 
  typescript: {
    typeCheck: true,
    strict: true
  },
  app: {
    pageTransition: { name: 'page-fade', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Coca",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.ico" }]
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/image', "@nuxt/eslint"],
  css: [
    '~/assets/scss/main.scss',
  ],
  vite: {
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