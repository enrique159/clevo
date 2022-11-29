import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createMetaManager } from 'vue-meta'
import PrimeVue from 'primevue/config';
import VueTablerIcons from "vue-tabler-icons";

// PRIME VUE COMPONENTS
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';

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
import { messages, defaultLocale } from "@/locales"
const i18n = createI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
})

const app = createApp(App)

// Components
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Avatar', Avatar)

app.use(createPinia())
app.use(createMetaManager())
app.use(PrimeVue)
app.use(VueTablerIcons)
app.use(router)
app.use(i18n)

app.mount('#app')
