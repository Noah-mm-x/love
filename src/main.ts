import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
import router from "./router"
import 'lib-flexible'
import 'animate.css'
createApp(App).use(router).mount('#app')
