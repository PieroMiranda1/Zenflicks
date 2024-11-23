import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from "./router/index.js";

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config'

import Card from "primevue/card";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Toast from "primevue/toast";
import InputText from "primevue/inputtext";
import Message from "primevue/message";
import Dialog from "primevue/dialog";
import Select from "primevue/select";
import DatePicker from "primevue/datepicker";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';


const app = createApp(App)

app.use(PrimeVue, { ripple: true, theme: { preset: Aura, options: {
            prefix: 'p',
            darkModeSelector: 'off',
            cssLayer: false
        } } });

app.use(router)

app.component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-toolbar', Toolbar)
    .component('pv-toast', Toast)
    .component('pv-input-text', InputText)
    .component('pv-message', Message)
    .component('pv-dialog', Dialog)
    .component('pv-select', Select)
    .component('pv-datepicker', DatePicker)
    .component('pv-splitter', Splitter)
    .component('pv-splitter-panel', SplitterPanel)
    .component('pv-icon-field', IconField)
    .component('pv-input-icon', InputIcon)



app.mount('#app')
