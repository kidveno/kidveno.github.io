<template>
    <Article :dataModel="article"></Article>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Article from '@/components/Article.vue'
import ArticleModel from '../model/ArticleModel'

@Options({
  components: {
    Article
  },
  props: {
    article: null
  }
})
export default class ArticlePage extends Vue {

}
</script>
