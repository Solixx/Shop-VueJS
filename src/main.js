import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons'

library.add(faMicrophone, faMicrophoneSlash)

const pinia = createPinia();

createApp(App)
.use(pinia)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

