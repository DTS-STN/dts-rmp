import dotenv from 'dotenv'
dotenv.config()

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#39b982', height: '4px' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/Vuelidate.js',
      ssr: false
    },
    { src: '~/plugins/vue2-editor', ssr: false },
    {
      src: '~/plugins/global.js'
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Nuxt Authorization module
    '@nuxtjs/auth',
    // https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.baseURL || 'http://localhost:3000'
  },
  i18n: {
    locales: [
      {
        name: 'Français',
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.js'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-CA',
        file: 'en-CA.js'
      }
    ],
    // strategy: 'no_prefix',
    rootRedirect: 'en/search/engagement',
    lazy: true,
    parsePages: true,
    langDir: 'lang/',
    strategy: 'prefix_and_default'
  },
  /*
   ** NuxtAuth  - attribs
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            propertyName: ''
          },

          logout: {
            url: '/api/auth/logout',
            method: 'post'
          },

          user: {
            url: '/api/auth/user',
            method: 'get',
            propertyName: 'user'
          }
        },
        // tokenRequired: true,
        tokenType: 'bearer'
        // globalToken: true,
        // autoFetchUser: true
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      // callback: '/welcome',
      home: '/welcome'
    }
  },

  serverMiddleware: [
    // API middleware
    '~/api/index'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
