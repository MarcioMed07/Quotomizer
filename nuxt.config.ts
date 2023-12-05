// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Pacifico: true,
    },
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
});
