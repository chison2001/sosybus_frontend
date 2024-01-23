import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVueNext } from 'bootstrap-vue-next'
import router from './router'
import App from './App.vue'
import { faGoogle , faGithub} from '@fortawesome/free-brands-svg-icons'

library.add(faGoogle, faGithub);
createApp(App)
    .use(BootstrapVueNext)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
