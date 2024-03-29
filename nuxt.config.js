export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Subjects',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],


  router: {
    middleware: ['auth']
  },
  auth: {
   strategies: {
     local: {
      token: {
        property: 'access_token',
        global: true,
        type: 'bearer'
      },
      user: {
        property: false
      },
      endpoints: {
        register: {url:'/api/register', method:'post'},
        login: {url:'/api/login', method:'post'},
        logout: {url:'/api/logout', method:'post'},
        user: {url:'/api/user', method:'get'}
      }
     },
   }
  },
  redirect: {
    login: '/login',
    logout: '/login',
    home: '/dashboard'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: 'https://lentrix.tk/gdm'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
