module.exports = {
  css: ['~/assets/styles/main.scss'],
  head: {
    title: 'WhereToEat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { hid: 'image', property: 'og:image', name: 'og:image', content: '' },
      { hid: 'url', property: 'og:url', name: 'og:url', content: '' },
      { hid: 'title', property: 'og:title', name: 'og:title', content: 'WhereToEat' },
      { hid: 'ogdescription', property: 'og:description', name: 'og:description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: '/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
    ],
    script: [
      { type: 'text/javascript', src: '/jquery.js' },
      { type: 'text/javascript', src: '/tether.js' },
      { type: 'text/javascript', src: '/bootstrap.js' }
    ]
  },
  loading: false,
  plugins: [
    '~plugins/maps.js'
  ],
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
