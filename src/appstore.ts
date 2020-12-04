import { Store, createStore } from 'vuex'
import axios from 'axios'
import Article from '@/components/Article.vue'
import ArticleModel from './model/ArticleModel'

const articleDataPath = './assets/articles.json'

export interface AppState{
    sidebarOpened: boolean;
    articles: ArticleModel[];
}

const store = new Store<AppState>({
  state: {
    sidebarOpened: false,
    articles: []
  },
  actions: {
    loadArticlesAsync: async (ctx) => {
      const response = await axios.get(articleDataPath)
      ctx.commit('addArticles', response.data)
    }
  },
  mutations: {
    /**
     * Add a list of articles to the store
     */
    addArticles: (state: AppState, payload: ArticleModel[]) => {
      if (state.articles.length === 0 || !state.articles) {
        payload.forEach(am => {
          state.articles.push(am)
        })
      }
    },
    /**
     * Sets sidebar state
     * @param state Duh
     * @param payload boolean containing the sidebar state to set
     */
    setSidebarOpened (state: AppState, payload: boolean) {
      state.sidebarOpened = payload
    },
    /**
     * Toggles sidebar state
     * @param state Duh
     */
    toggleSidebar (state: AppState) {
      state.sidebarOpened = !state.sidebarOpened
    }
  },
  getters: {}
})

export default store
