// 主要是來放置擴展 ESLint 的規則的配置
// 目前 @nuxtjs/eslint-config-typescript 是基於 @nuxtjs/eslint-config 來擴展 TypeScript 的設定
// 而且 @nuxtjs/eslint-config 包含的是 Vue 2 的 ESLint 設定
// 所以我們需要再額外安裝 eslint-plugin-vue 來擴展 Vue 3 規則配置
// 並覆寫 vue/multi-word-component-names 規則

// 需要將其添加至 ESLint 的 .eslintrc.js 設定檔內
// 在 extends 添加字串 prettier 表示使用 eslint-config-prettier 擴充配置
// 主要用來防止 Prettier 排版與 ESLint 發生衝突
// 讓其可以用來禁用 ESLint 的格式化
// 接著在 plugins 中添加 prettier 字串表示使用 eslint-plugin-prettier 套件擴充
// 讓 ESLint 可以提示我們格式有錯誤的地方。
// 為了讓 Prettier 與 ESLint 有更好的搭配
// 在 rules 的參數中記得添加 'prettier/prettier': 'error'
// 讓 ESLint 可以提示 Prettier 的排版異常提示供我們做修正
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  // rules: {
  //   'prettier/prettier': [
  //     'error',
  //     {
  //       singleQuote: true,
  //       parser: 'flow'
  //     }
  //   ]
  // },
  overrides: [
    {
      files: [
        '**/server/**/*.{js,ts,vue}',
        '**/components/**/*.{js,ts,vue}',
        '**/pages/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/app.{js,ts,vue}',
        '**/error.{js,ts,vue}'
      ],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
