<template>
  <h1>Home</h1>
  <hr>
  <div v-for="a in articles" :key="a.id">
    <Article :dataModel="a"></Article>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Article from '@/components/Article.vue'
import ArticleModel from '@/model/ArticleModel'
import axios from 'axios'
import util from '../util'

const articleDataPath = './assets/articles.json'

@Options({
  components: {
    Article
  }
})
export default class Home extends Vue {
  articles!: ArticleModel[];

  mounted () {
    axios.get(articleDataPath)
      .then(response => {
        this.articles = response.data
      })
  }
}
</script>
