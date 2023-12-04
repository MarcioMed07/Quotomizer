import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitterSquare, faTwitch, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faShuffle, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faGithubSquare, faShuffle, faSpinner)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})