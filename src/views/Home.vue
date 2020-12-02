<template>
  <div class="article-container">
  <h1>Home (All Content)<hr></h1>
    <Article  v-for="a in articles" :key="a.id" :dataModel="a"></Article>
  </div>
</template>

<style lang="scss">
  h1{
    width:100%;
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
  }
})
export default class Home extends Vue {
  get articles () {
    return this.$store.state.articles
  }
}
</script>
