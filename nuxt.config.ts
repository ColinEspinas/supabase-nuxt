import { defineNuxtConfig } from 'nuxt';
import esLintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase'],
  buildModules: ['@pinia/nuxt'],
  vite: {
    plugins: [esLintPlugin()]
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/global.css'
  ],
  typescript: {
    shim: false
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL
    }
  }
});
