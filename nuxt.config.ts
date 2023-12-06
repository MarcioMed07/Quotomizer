// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxt/ui"],
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
});
