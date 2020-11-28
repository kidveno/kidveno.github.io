<template>
  <article>
            <small style="float:right">&#64;{{model.poster}}</small>
            <h3>{{model.mainTitle}}</h3>
            <img :src="model.imgPath" />
            <div>
              <i class="fas fa-heart" style="color:tomato"> 29</i>
              <i class="fas fa-comments" style="color:teal"> 6</i>
            </div>
              <h4>{{model.subTitle}}/h4>
            <p>
              {{model.description}}
            </p>
          </article>
</template>

<script lang="ts">
import component from '*.vue'
import { Options, Vue } from 'vue-class-component'
import ArticleModel from '../model/ArticleModel'

@Options({
  props: {
    model: ArticleModel
  }
})
export default class Article extends Vue {
  model!: ArticleModel

  get article (): ArticleModel {
    return this.model
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
