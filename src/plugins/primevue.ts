import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Avatar from 'primevue/avatar';
import TieredMenu from 'primevue/tieredmenu';
import Checkbox from 'primevue/checkbox';
import Tooltip from 'primevue/tooltip';
import Divider from 'primevue/divider';

export const PrimeVueConf = (app: any) => {
  app.component('Button', Button)
  app.component('InputText', InputText)
  app.component('Avatar', Avatar)
  app.component('TieredMenu', TieredMenu)
  app.component('Password', Password)
  app.component('Checkbox', Checkbox)
  app.directive('tooltip', Tooltip)
  app.component('Divider', Divider)
}
