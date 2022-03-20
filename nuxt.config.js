import colors from 'vuetify/es5/util/colors'
const firebaseConfig = require('./firebase.json')
export default {

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


  css: ['boxicons/css/boxicons.min.css'],

 
  plugins: [
    '@/plugins/vuesax.js',
    '@/plugins/donut.js',
    '@/plugins/vuetify.js',
    '@/plugins/vue.js',
    '@/plugins/import.js',
  ],


  components: true,


  buildModules: [

    '@nuxtjs/vuetify',
  ],

  
  modules: [
  
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/firebase',
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyCuRK2LGqOzvelCzdBkSNX418wmbEBdkCE',
      authDomain: 'bookingit-f81ec.firebaseapp.com',
      projectId: 'bookingit-f81ec',
      storageBucket: 'bookingit-f81ec.appspot.com',
      messagingSenderId: '468136550484',
      appId: '1:468136550484:web:91f056d517a9706035cdc1',
      measurementId: 'G-6HBW4T58VS',
    },
    services: {
      storage: true,
      database: true,
      firestore: true,
    },
  },

 
  axios: {
    baseURL: 'http://128.199.245.64:81/',
    credentials: false,
    proxyHeaders: false,
 
  },
  proxy: {
    
  },
  auth: {
   
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
            
          },
          user: {
            url: '/api/v1/auth/me',
            method: 'get',
           
          },
        },
      },
    },
  },

  
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

  build: {},
  env: {
    UrlAPI: 'http://128.199.245.64:81/',
  },
}

