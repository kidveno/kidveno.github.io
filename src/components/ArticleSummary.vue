 <!--Represents a preview of an article-->
<template>
  <article class="summary">
      <router-link :to="articleLink">
            See Full Demo
      </router-link>
    <h3>{{dataModel.mainTitle}}</h3>
    <img class="article-img" :src="dataModel.imgPath" />
    <div class="tags">
        <Tag :tagTxt="tag" v-for="tag in dataModel.tags" :key="tag"></Tag>
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
import Tag from '@/components/Tag.vue'
import util from '../util'

@Options({
  props: {
    dataModel: null
  },
  components: {
    Tag
  }
})
export default class ArticleSummary extends Vue {
  dataModel!: ArticleModel
  get articleLink (): string {
    return `/article/?articleid=${this.dataModel?.id}`
  }
}
</script>
<style scoped lang="scss">

  article.summary{
    width:400px;
    border:2px solid var(--secondary);
    padding:8px;
    border-radius: 1em;
    margin-bottom: 1em;
    a {
      float:right;
      width:auto;
      text-decoration:underline;
      &:visited{
        color:var(--primary);
      }
    }
    .article-img{
      width:380px;
      height:150px;
      padding:none;
      margin:none;
      object-fit: cover;
    }
    h3, h4, p{
      margin-top:8px;
      margin-bottom:4px;

    }
  }
  article + article{
    margin-left:10px;
  };
</style>
