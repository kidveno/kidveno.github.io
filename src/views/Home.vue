<!--
  Main page for this github page. Renders a list of articles based on the current tag selected or all
  avaiable articles otherwise
-->
<template>
  <div class="article-container">
    <header>
      <h1>Home</h1>
      <h2>{{ subTitle }}{{ tagTitle }}</h2>
      <router-link v-if="hasTag" to="/" class="clear-page-btn">✖</router-link>
      <hr>
    </header>
    <ArticleSummary v-for="a in articles" :key="a.id" :dataModel="a"></ArticleSummary>
  </div>
</template>

<style lang="scss">
  header{
    width:100%;
    h1, h2{
      display:inline;
      margin-left: 10px;
    }
  }
  .article-container{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    width:100%;
  }
</style>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Article from '@/components/Article.vue'
import ArticleModel from '@/model/ArticleModel'
import axios from 'axios'
import util from '../util'
import ArticleSummary from '@/components/ArticleSummary.vue'

@Options({
  components: {
    ArticleSummary
  },
  props: {
    tag: ''
  }
})
export default class Home extends Vue {
  /**
   * Tag selected base on 'route'
   */
  tag!: string

  /**
   * getter for showing contented with the selected 'tag'
   */
  get tagTitle (): string {
    if (this.hasTag) {
      return `'${this.tag}'`
    }
    return ''
  }

  /**
   * getter for page subtitle.
   */
  get subTitle (): string {
    if (this.hasTag) {
      return 'tagged '
    }
    return 'All Content '
  }

  /**
   * getter that tests if we have a valid tag
   */
  get hasTag (): boolean {
    return !(this.tag === undefined || this.tag === '' || !this.tag)
  }

  /**
   * getter for articles to be rendered based on the current 'tag'
   */
  get articles () {
    if (this.hasTag) {
      return this.$store.state.articles.filter(a => {
        return a.tags.includes(this.tag)
      })
    } else {
      return this.$store.state.articles
    }
  }

  getArticleById (id: string): ArticleModel | null {
    if (!id || id === '') {
      return null
    }
    const articles = this.$store.state.articles.filter(a => {
      return a.id === id
    })

    if (articles.length === 0) {
      return null
    }
    return articles[0]
  }

  /**
   * helper getter for getting a unique list of tags
   */
  private get uniqueTags (): string[] {
    const tags: string[] = []
    this.$store.state.articles.forEach(a => {
      a.tags.forEach(t => tags.push(t))
    })
    return tags
  }
}
</script>
