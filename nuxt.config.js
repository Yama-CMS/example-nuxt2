export default {
  target: 'static',
  head: {
    title: 'nuxt-yama-cms',
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
  components: true,
  modules: [
    '@nuxt/content'
  ],
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['permalink']).where({ permalink: { $ne: '/' }}).fetch()
      return files.map(file => file.permalink)
    }
  }
}
