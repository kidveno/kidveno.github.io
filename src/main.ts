import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './appstore'
const app = createApp(App)
  .use(router)
  .use(store)
const vm = app.mount('#app')
