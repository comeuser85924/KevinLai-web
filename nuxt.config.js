
export default {
  mode: 'spa',
  router: {
    base: '/comeuser85924.github.io/'
  },
  /*
  ** Headers of the page
  */
  // router: {
  //   base: '/<comeuser85924>/'
  // },
  head: {
    title: 'Kevin的網站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script:[
      {src: "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet" ,href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"},
      { rel:"stylesheet", href:"https://www.w3schools.com/w3css/4/w3.css"},
      // { rel:"stylesheet", href:"/assets/css/nicebuttons.css"}
    ]
  },  
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@assets/css/all.css',
    // '@assets/css/nicebuttons.css'
    // '@assets/css/navstyle.css',
    // '@assets/css/bootstrap.css',
    // '@assets/css/bootstrap.min.css',

    // '@assets/css/normalize.css',
    // '@assets/css/sytle.css',
    // '@assets/css/vicons-font.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-fb-customer-chat.js', ssr: false }
    // {
    //   src: '~/plugins/main_index.js',
    // },
    // {
    //   src: '~/plugins/bootstrap.js',
    // },
    // {
    //   src: '~/plugins/bootstrap.min.js',
    // },

    // {
    //   src: '~/plugins/jquery.min.js',
    // },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
