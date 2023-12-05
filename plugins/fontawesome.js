import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faHome, faShuffle, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faGithubSquare, faShuffle, faSpinner, faHome)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})