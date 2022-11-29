import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'
import PrimeVue from 'primevue/config';
import VueTablerIcons from "vue-tabler-icons";

// PRIME VUE COMPONENTS
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import TieredMenu from 'primevue/tieredmenu';

import App from './App.vue'
import router from './router'

import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css' 

import './styles/base.scss'

// Change the default locale momentjs
import moment from 'moment'
import 'moment/dist/locale/es';
moment.locale('es')

// Locales
import i18n from '@/plugins/i18n'

const app = createApp(App)

// Components
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Avatar', Avatar)
app.component('TieredMenu', TieredMenu)

app.use(createPinia())
app.use(createMetaManager())
app.use(PrimeVue)
app.use(VueTablerIcons)
app.use(router)
app.use(i18n)

app.mount('#app')
