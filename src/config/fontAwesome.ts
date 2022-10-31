import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faMagnifyingGlass, faBars, faArrowLeft, faSpinner, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(
    faMagnifyingGlass, faBars, faArrowLeft, faSpinner, faBackward, faForward
)

export {
    FontAwesomeIcon
}