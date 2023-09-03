import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'; // Import your Vuex store

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons'

library.add(faMicrophone, faMicrophoneSlash)

createApp(App)
.use(router)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

