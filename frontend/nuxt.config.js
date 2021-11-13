module.exports = {

    head: {
        titleTemplate: '%s Portfolio',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},

            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            {hid: 'description', name: 'description', content: 'Meta description'}
        ],
        script: [
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
            }
        ],
        link: [
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
                href: 'https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Ubuntu&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap'
            }
        ]
    },

    buildModules: [
        "@nuxtjs/vuetify"
    ],

    modules: [
        "@nuxtjs/axios",
        "bootstrap-vue/nuxt",
        "vue-sweetalert2/nuxt"
    ],

    srcDir: 'client/',

    // css: [
    //     '~/assets/css/style.css'
    // ],
    // styleResources: {
    //     scss: [
    //         '~/assets/scss/style.scss',
    //     ]
    // },
    components: true
}