// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-11-21',

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],

  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    public: {
      siteUrl: process.env.SITE_URL || 'https://your-site.vercel.app'
    }
  },

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],

  image: {
    domains: ['localhost'],
    dir: 'public/images'
  },

  devtools: { enabled: true },

  // This is the key line - Vercel support is built into Nuxt
  nitro: {
    preset: 'vercel'
  },

  ssr: true
})