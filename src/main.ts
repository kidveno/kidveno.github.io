import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './appstore'
import VueMarkdownIt from 'vue3-markdown-it'
import 'highlight.js/styles/obsidian.css'

const app = createApp(App)
  .use(router)
  .use(store)
  .use(VueMarkdownIt)
const vm = app.mount('#app')
