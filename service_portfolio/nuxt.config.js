const ALLOWED_HOSTS = ['*.google-analytics.com', '*.doubleclick.net', '*.googleusercontent.com', '*.firebaseio.com']

module.exports = {
    css: [
        '@/assets/css/main.css'
    ],
    render: {
        csp: {
            reportOnly: false,
            addMeta: true,
            hashAlgorithm: 'sha256',
            unsafeInlineCompatiblity: true,
            policies: {
                'default-src': ["'self'", 'https:', ...ALLOWED_HOSTS],
                'script-src': ["'self'", "'strict-dynamic'", 'https:'],
                'style-src': ["'self'", "'strict-dynamic'", 'https:'],
                'frame-src': [],
                'object-src': ["'none'"],
                'base-uri': ["'self'"]
                /* "report-uri": [
                  "https://sentry.io/api/<project>/security/?sentry_key=<key>",
                ], */
            }
        }
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
        build: {
            analyze: {
                analyzerMode: 'static'
            }
        },
        generate: {
            fallback: true
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
                useShortDoctype: true
            }
        },
        filenames: {
            app: ({
                      isDev,
                      isModern
                  }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:7]${isModern ? '.modern' : ''}.js`,
            chunk: ({
                        isDev,
                        isModern
                    }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:7]${isModern ? '.modern' : ''}.js`,
            css: ({isDev}) => isDev ? '[name].css' : 'css/[contenthash:7].css',
            img: ({isDev}) => isDev ? '[path][name].[ext]' : 'img/[name].[contenthash:7].[ext]',
            font: ({isDev}) => isDev ? '[path][name].[ext]' : 'fonts/[name].[contenthash:7].[ext]',
            video: ({isDev}) => isDev ? '[path][name].[ext]' : 'videos/[name].[contenthash:7].[ext]'
        }
    },
    serverMiddleware: [
        '~/server-middleware/headers.js',
        '~/server-middleware/logger.js'
    ],
    publicRuntimeConfig: {},

    server: {
        host: process.env.NUXT_HOST,
        port: process.env.NUXT_PORT
    },

    ssr: false,

    head: {
        title: 'portfolio',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'Watcharapon Weeraborirak, Kane watcharapon.dev'
            },
            {
                name: 'keywords',
                content: 'watcharapon weeraborirak, watcharapon.dev, kane watcharapon, portfolio'
            },
            {
                hid: 'author',
                name: 'author',
                content: 'Watcharapon Weeraborirak'
            },
            {
                hid: 'og:title',
                name: 'og:title',
                content: 'portfolio',
            },
            {
                hid: 'og:type',
                name: 'og:type',
                content: 'website',
            },
            {
                hid: 'og:image',
                name: 'og:image',
                content:
                    'https://watcharapon.dev/kanelogo.png'
            },
            {
                hid: 'og:description',
                name: 'og:description',
                content:
                    'Watcharapon Weeraborirak, Kane watcharapon.dev',
            }
        ],

        script: [
            {
                src: 'https://accounts.google.com/gsi/client'
            },
            {
                src: "https://www.googletagmanager.com/gtag/js?id=G-71TY1V8321",
                async: true
            },
            {
                src: 'https://cdn.tailwindcss.com'
            },
            {
                src: '/vendor/jquery/jquery.min.js'
            },
            {
                src: '/vendor/bootstrap/js/bootstrap.bundle.min.js'
            },
            {
                src: '/vendor/jquery.easing/jquery.easing.min.js'
            },
            {
                src: '/vendor/isotope-layout/isotope.pkgd.min.js'
            },
            {
                src: '/vendor/venobox/venobox.min.js'
            },
            {
                src: '/vendor/owl.carousel/owl.carousel.min.js'
            },
            {
                src: '/vendor/aos/aos.js'
            },
            {
                src: '/js/main.js'
            },
            {
                src: '/vendor/php-email-form/validate.js'
            },
            {
                src: 'https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js',
                async: true,
                defer: true
            }
        ],

        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/kanelogo.png'
            },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
                crossorigin: 'anonymous'
            },
            {
                rel: 'stylesheet',
                href: '/vendor/bootstrap/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                href: '/vendor/icofont/icofont.min.css'
            },
            {
                rel: 'stylesheet',
                href: '/vendor/boxicons/css/boxicons.min.css'
            },
            {
                rel: 'stylesheet',
                href: '/vendor/venobox/venobox.css'
            },
            {
                rel: 'stylesheet',
                href: '/vendor/owl.carousel/assets/owl.carousel.min.css'
            },
            {
                rel: 'stylesheet',
                href: '/vendor/aos/aos.css'
            },
            {
                rel: 'stylesheet',
                href: '/style-new.css'
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com'
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Prompt:wght@400&display=swap'
            },
        ]
    },

    plugins: [
        '~/plugins/notifier.js',
        '~/plugins/vue-horizon.js'
    ],

    auth: {
        strategies: {
            local: {
                token: {
                    property: 'access_token',
                    global: true,
                    type: 'Bearer',
                    expires: 86400
                },
                user: {
                    property: '',
                    autoFetch: true
                },
                endpoints: {
                    login: {url: '/auth/token', method: 'post'},
                    user: {url: '/auth/user/me/', method: 'get'}
                },
                rememberMe: true
            }
        }
    },


    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/date-fns',
        'vue-sweetalert2/nuxt',
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        'bootstrap-vue/nuxt',
    ],
    axios: {
        baseURL: process.env.BASEURL_SERVER
    },
    srcDir: 'client/',
    components: true
}
