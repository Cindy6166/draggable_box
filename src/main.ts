import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createPinia } from 'pinia'
import router from './router'
import { worker } from './mocks/browser'

if (process.env.NODE_ENV === 'development') {
    worker.start()
  }

createApp(App).use(router).use(createPinia()).mount('#app')
