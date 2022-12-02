import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'
import PrimeVue from 'primevue/config';
import VueTablerIcons from "vue-tabler-icons";
import App from './App.vue'
import router from './router'

// PRIME VUE PLUGIN
import { PrimeVueConf } from './plugins/primevue';
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// ANIMATE.STYLE
import 'animate.css';

// STYLES
import './styles/base.scss'

// Change the default locale momentjs
import moment from 'moment'
import 'moment/dist/locale/es';
moment.locale('es')

// Locales
import i18n from '@/plugins/i18n'

const app = createApp(App)

PrimeVueConf(app)
app.use(createPinia())
app.use(createMetaManager())
app.use(PrimeVue)
app.use(VueTablerIcons)
app.use(router)
app.use(i18n)

app.mount('#app')
