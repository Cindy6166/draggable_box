import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createPinia } from 'pinia'

App.use(createPinia())

createApp(App).mount('#app')
