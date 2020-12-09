import { Store, createStore } from 'vuex'
import axios, { AxiosResponse } from 'axios'
import Article from '@/components/Article.vue'
import ArticleModel from './model/ArticleModel'

const articleDataPath = './assets/articles.json'
const articleMarkdownPath = './assets/markdown'

export interface ArticleMarkdown {
  markdown: string;
  articleId: string;
}

export class AppState {
    sidebarOpened: boolean
    articles: ArticleModel[]
    currentArticleId: string
    viewingArticle: boolean
    constructor () {
      this.sidebarOpened = false
      this.articles = []
      this.currentArticleId = ''
      this.viewingArticle = false
    }

    getArticleById (id: string): ArticleModel | null {
      if (!this.articles || this.articles.length === 0) {
        return null
      }
      const foundArticles = this.articles.filter(a => a.id === id)

      if (foundArticles.length === 0) {
        return null
      }
      return foundArticles[0]
    }
}

const store = new Store<AppState>({
  state: new AppState(),
  actions: {
    loadArticleMarkdownAsync: async (ctx, articleId: string) => {
      try {
        const response = await axios.get(`${articleMarkdownPath}/${articleId}.md`)
        ctx.commit('setArticleMarkdown', { markdown: response.data, articleId })
      } catch (error) {
        console.error(error)
      }
    },
    loadArticlesAsync: async (ctx) => {
      // Get the article.json
      const response = await axios.get(articleDataPath)
      ctx.commit('addArticles', response.data)
    }
  },
  mutations: {
    setArticleMarkdown (state, data: ArticleMarkdown) {
      const article = state.getArticleById(data.articleId)
      if (!article) {
        console.warn('no article with id: ' + data.articleId)
        return
      }
      if (article.markdown !== '') {
        console.log(article)
        console.log('article already loaded: ' + article.id)
        return
      }
      article.markdown = data.markdown
    },
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
  getters: {
    currentArticle (state: AppState): ArticleModel | null {
      if (state.currentArticleId === '' || state.currentArticleId === undefined) {
        return null
      }
      const foundArticles = state.articles.filter(a => {
        return a.id === state.currentArticleId
      })

      if (foundArticles.length === 0) {
        return null
      }
      return foundArticles[0]
    }
  }
})

export default store
