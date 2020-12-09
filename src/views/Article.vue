<template>
          <vue3-markdown-it :source="markdownText"/>
</template>

<style lang="scss" scoped>
article.page {
  display:flex;
  justify-content: center;
  width:80%;
  min-height: 100%;
}
</style>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import ArticleModel from '../model/ArticleModel'

@Options({
  components: {
  },
  props: {
    articleId: ''
  }
})
export default class Article extends Vue {
  articleId!: string

  mounted () {
    this.$store.dispatch('loadArticleMarkdownAsync', this.articleId)
  }

  get currentArticle (): ArticleModel | null {
    return this.$store.state.getArticleById(this.articleId)
  }

  get markdownText (): string {
    if (!this.currentArticle || !this.currentArticle.markdown || this.currentArticle.markdown === '') {
      return ''
    }
    return this.currentArticle.markdown
  }

  get modalClass (): string {
    const modalTxt = this.$store.state.viewingArticle
      ? 'modal opened'
      : 'modal closed'
    return modalTxt
  }
}
</script>
