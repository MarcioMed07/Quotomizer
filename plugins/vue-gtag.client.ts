import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  
 const config = useRuntimeConfig()
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID ?? (config.public.gaMeasurementId as string) ?? 'GA_MEASUREMENT_ID'
    }
  })
  trackRouter(useRouter())
})
