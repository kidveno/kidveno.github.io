<template>
  <article>
            <small style="float:right">&#64;{{dataModel.poster}}</small>
            <h3>{{dataModel.mainTitle}}</h3>
            <img width="500" height="200" :src="dataModel.imgPath" />
            <div>
              <i class="fas fa-heart" style="color:tomato"> 29</i>
              <i class="fas fa-comments" style="color:teal"> 6</i>
            </div>
              <h4>{{dataModel.subTitle}}</h4>
            <p>
              {{dataModel.description}}
            </p>
          </article>
</template>

<script lang="ts">
import component from '*.vue'
import { Options, Vue } from 'vue-class-component'
import ArticleModel from '../model/ArticleModel'

@Options({
  props: {
    dataModel: ArticleModel
  }
})
export default class Article extends Vue {
  dataModel!: ArticleModel
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
