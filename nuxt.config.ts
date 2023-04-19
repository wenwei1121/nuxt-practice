// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 這個模組已經包含手動安裝時需要建立的 Tailwind CSS 指令
  // tailwindcss.css 需要的全域設定與 PostCSS 參數選項
  // 同時也預設了 tailwind.config.js 的相關 content 目錄路徑
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  app: {
    head: {
      title: "Nuxt",
      meta: [
        { name: "description", content: "EveryThink About Nuxt 3" }
      ],
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  },
  typescript: {
    typeCheck: true
  }
  // pages: true // => 不用 app.vue 時加這個
})