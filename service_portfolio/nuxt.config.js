module.exports = {
  universal: true,
  css: ["@/assets/css/main.css"],
  build: {
    transpile: [
      "vuetify/lib",
      ({ isLegacy }) => isLegacy && "axios",
    ],

    extend(config, { isDev, isClient }) {
      if (!isDev) {
        config.module.rules.push({
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
          // test: /\.js$/,
          // loader: 'babel-loader',
          // exclude: /node_modules/,
          // options: {
          //   presets: ['@babel/preset-env']
          // }
        });
      }
    },
    generate: {
      fallback: true,
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
    filenames: {
      app: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? ".modern" : ""}.js`
          : `[contenthash:7]${isModern ? ".modern" : ""}.js`,
      chunk: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? ".modern" : ""}.js`
          : `[contenthash:7]${isModern ? ".modern" : ""}.js`,
      css: ({ isDev }) => (isDev ? "[name].css" : "css/[contenthash:7].css"),
      img: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "img/[name].[contenthash:7].[ext]",
      font: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "fonts/[name].[contenthash:7].[ext]",
      video: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "videos/[name].[contenthash:7].[ext]",
    },
  },
  serverMiddleware: [
    "~/server-middleware/headers.js",
    "~/server-middleware/logger.js",
  ],
  publicRuntimeConfig: {},

  server: {
    host: process.env.NUXT_HOST,
    port: process.env.NUXT_PORT,
  },

  head: {
    title: "Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      {
        name: "keywords",
        content:
          "watcharapon, watcharapon weeraborirak, วัชรพล, วีระบริรักษ์, วัชรพล วีระบริรักษ์, kane watcharapon, developer",
      },
      {
        hid: "description",
        name: "description",
        content:
          'Watcharapon Weeraborirak, Portfolio, Kane watcharapon, watcharapon.dev, วัชรพล วีระบริรักษ์, portfolio, Fullstack developer & AI Engineer at Thaicom PCL. Hiring me now! :) search me on google by "watcharapon weeraborirak" or "kane watcharapon" or "วัชรพล วีระบริรักษ์" email me at wera.watcharapon@gmail.com or linkedin.com/in/watcharapon-weeraborirak',
      },
      {
        hid: "author",
        name: "author",
        content: "Watcharapon Weeraborirak, วัชรพล วีระบริรักษ์",
      },
      {
        prefix: "og: http://ogp.me/ns#",
        hid: "og:url",
        property: "og:url",
        content: "https://watcharapon.dev",
      },
      {
        prefix: "og: http://ogp.me/ns#",
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        prefix: "og: http://ogp.me/ns#",
        hid: "og:title",
        property: "og:title",
        content: "Watcharapon Weeraborirak | Portfolio",
      },
      {
        prefix: "og: http://ogp.me/ns#",
        hid: "og:description",
        property: "og:description",
        content:
          'Watcharapon Weeraborirak, Portfolio, Kane watcharapon, watcharapon.dev, วัชรพล วีระบริรักษ์, portfolio, Fullstack developer & AI Engineer at Thaicom PCL. Hiring me now! :) search me on google by "watcharapon weeraborirak" or "kane watcharapon" or "วัชรพล วีระบริรักษ์" email me at wera.watcharapon@gmail.com or linkedin.com/in/watcharapon-weeraborirak',
      },
      {
        prefix: "og: http://ogp.me/ns#",
        hid: "og:image",
        property: "og:image",
        content: "https://watcharapon.dev/images/og2.png",
      },
    ],

    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-C0GJ389PTN",
        async: true,
      },
      {
        src: "https://accounts.google.com/gsi/client",
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-71TY1V8321",
        async: true,
      },
      {
        src: "https://cdn.tailwindcss.com",
      },
      {
        src: "https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js",
        async: true,
        defer: true,
      },
    ],

    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/kanelogo.png",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
        crossorigin: "anonymous",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Prompt:wght@400&display=swap",
      },
    ],
  },

  plugins: ["~/plugins/notifier.js", "~/plugins/vue-horizon.js"],

  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/date-fns", "vue-sweetalert2/nuxt"],
  modules: ["@nuxtjs/axios", "bootstrap-vue/nuxt"],
  axios: {
    baseURL: process.env.BASEURL_SERVER,
  },
  srcDir: "client/",
  components: true,
};
