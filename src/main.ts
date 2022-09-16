import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from "./router"
import 'lib-flexible'
import 'animate.css'
import { plugin as vueTyped } from 'vue3-typed.js';
createApp(App).use(vueTyped).use(router).mount('#app')
