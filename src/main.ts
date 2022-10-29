import { createApp } from 'vue'
import './assets/css/app.scss'
import App from './App.vue'
import { router } from './config/router'
import { FontAwesomeIcon } from './config/fontAwesome'

const app = createApp(App)
app.component('Icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
