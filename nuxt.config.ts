// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@mindenit/ui/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-gtag',
    '@nuxtjs/seo',
  ],
  nitro: {
    devProxy: {
      host: '127.0.0.1',
    },
  },
  icon: {
    provider: 'iconify',
    serverBundle: {
      collections: ['ph'],
    },
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
})
