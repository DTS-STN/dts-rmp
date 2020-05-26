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
  loading: { color: '#39b982' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Nuxt Authorization module
    '@nuxtjs/auth'
  ],

  /*
   ** Future use IF safe
   */
  jwt: {
    jwtSecret: process.env.VUE_APP_JWT_SECRET || 'default'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            propertyName: 'accessToken'
          },

          logout: {
            url: '~/server/api/auth/logout',
            method: 'delete'
          },

          user: {
            url: '~/server/api/auth/user',
            method: 'get',
            propertyName: 'data'
          }
        },
        // tokenRequired: true,
        tokenType: 'bearer'
        // globalToken: true,
        // autoFetchUser: true
      }
    }
  },

  serverMiddleware: [
    { path: '/api', handler: '~/server/api/routes/index' },
    { path: '/api/auth', handler: '~/server/api/auth/index' }
    // { path: '/api/user', handler: '~/server/api/user/index' }
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseURL: process.env.baseURL || 'http://localhost:3000/'
  },
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
