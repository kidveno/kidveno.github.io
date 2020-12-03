<template>
  <div class="article-container">
    <header>
      <h1>Home</h1>
      <h2>{{ subTitle }}{{ tagTitle }}</h2>
      <router-link v-if="hasTag" to="/" class="clear-btn">✖</router-link>
      <hr>
    </header>
    <Article  v-for="a in articles" :key="a.id" :dataModel="a"></Article>
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
    justify-content: space-evenly;
    width:100%;
  }
</style>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Article from '@/components/Article.vue'
import ArticleModel from '@/model/ArticleModel'
import axios from 'axios'
import util from '../util'

@Options({
  components: {
    Article
  },
  props: {
    tag: ''
  }
})
export default class Home extends Vue {
  //
  tag!: string

  get tagTitle (): string {
    if (this.hasTag) {
      return `'${this.tag}'`
    }
    return ''
  }

  get subTitle (): string {
    if (this.hasTag) {
      return 'tagged '
    }
    return 'All Content '
  }

  get hasTag (): boolean {
    return !(this.tag === undefined || this.tag === '' || !this.tag)
  }

  get articles () {
    if (this.tag === '' || this.tag === undefined) {
      return this.$store.state.articles
    } else {
      return this.$store.state.articles.filter(a => {
        return a.tags.includes(this.tag)
      })
    }
  }

  get uniqueTags (): string[] {
    const tags: string[] = []
    this.$store.state.articles.forEach(a => {
      a.tags.forEach(t => tags.push(t))
    })
    return tags
  }
}
</script>
