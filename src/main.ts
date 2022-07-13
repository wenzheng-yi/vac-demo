import { createApp } from 'vue'
import App from './App.vue'
import naive from './plugin/naive'
import router from './router'
import './css/index.css'

const app = createApp(App)
app.use(router).use(naive).mount('#app')

