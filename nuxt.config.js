export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "payzappnuxt",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/style.css"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/aos", mode: "client" },
    { src: "@/plugins/vue-awesome-swiper" }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    '@nuxtjs/ngrok',
    'nuxt-animejs'
  ],
  animejs: true,
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },   // other configs

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  purgeCSS: {
    whitelist: [
      "aos-init",
      "aos-animate",
      "data-aos-delay",
      "data-aos-duration",
      "fade-up",
      "zoom-in"
    ]
  },
  ngrok: {
    // module options
    authtoken: '1wfX25hXE9eqYM56jFGP4sy0E84_2eidW8j5hemBq1h8uNFce'
  }
};
