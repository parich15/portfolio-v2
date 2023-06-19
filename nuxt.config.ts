// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
      charset: 'utf-8',
      htmlAttrs:{
        lang: "en-EN"
      },
      link:[
        {rel: 'preload', as:'style', onload:"this.onload=null;this.rel='stylesheet'", href: 'https://fonts.googleapis.com/css2?family=Audiowide&family=Bai+Jamjuree:wght@300;500;600;700&family=Unbounded:wght@600&display=swap'}
      ],
      meta:[
        {
          name: 'theme-color', 
          content: '#000'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://paric.io'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'Paric.io - Portfolio'
        }
      ]
    }
  },

  devtools: { enabled: true },

  // Modulos
  modules:[
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],

  // CSS
  css:[
    '@/assets/css/main.css'
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    viewer:true
  },


  // Vite
  vite:{
    optimizeDeps:{
      include:[
        '@heroicons/vue/20/solid',
        '@heroicons/vue/24/outline',
        '@heroicons/vue/24/solid'
      ]
    }
  }
})
