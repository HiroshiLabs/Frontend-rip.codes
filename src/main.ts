import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index'
import VueAxios from 'vue-axios'
import axios from 'axios'
import './registerServiceWorker'



createApp(App).use(router).use(VueAxios, axios).mount('#app')
