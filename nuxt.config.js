import colors from 'vuetify/es5/util/colors'
const firebaseConfig = require('./firebase.json')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    titleTemplate: '%s - Booking',
    title: 'Booking',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['boxicons/css/boxicons.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuesax.js',
    '@/plugins/donut.js',
    '@/plugins/vuetify.js',
    '@/plugins/vue.js',
    '@/plugins/import.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/firebase',
  ],
  firebase: {
    config: firebaseConfig,
    services: {
      storage: true,
      database: true,
      firestore: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://api.it.cmtc.ac.th:49903/',
    credentials: false,
    proxyHeaders: false,
    // 'http://localhost:5000/'
    // proxy: true, // Can be also an object with default options
  },
  proxy: {
    
    // '/user/': 'http://localhost:5000/',
  },
  auth: {
    // redirect: {
    //   login: '/login',
    //   // logout: '/login',
    //   home: '/',
    // },
    strategies: {
      local: {
        token: {
          property: 'token',
        },
        user: {
          property: 'data',
        },
        endpoints: {
          login: {
            url: '/api/v1/auth/login',
            method: 'post',
            // propertyName: 'accessToken',
          },
          user: {
            url: '/api/v1/auth/me',
            method: 'get',
            // propertyName: 'data.item',
          },
        },
      },
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    UrlAPI:  'http://api.it.cmtc.ac.th:49903/',
  },
}
