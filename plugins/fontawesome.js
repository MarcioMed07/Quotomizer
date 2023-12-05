import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopy, faHome, faShare, faShuffle, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add( faCopy, faHome, faShare, faShuffle, faSpinner)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
  nuxtApp.vueApp.config.productionTip = false;
})