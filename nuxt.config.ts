// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: ["@nuxtjs/google-fonts", "@nuxt/ui", 'nuxt-simple-sitemap'],
  googleFonts: {
    families: {
      Pacifico: true,
    },
  },
  colorMode: {
    preference: "light",
  },
  ui: {
    global: true,
    icons: ["fa6-solid"],
  },
  site: {
    url: 'https://quotomizer.vercel.app/',
  },
  sitemap: {
    sources: ['/api/sitemap'],
  },
  runtimeConfig: {
    public: { gaMeasurementId: process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID },
  }
});