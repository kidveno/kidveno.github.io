<template>
  <div class='search'>
    <div class='search-select'>
      <input
        placeholder='Search Content'
        required='required'
        type='text'
        v-model='searchText'
        @input='search'
      />
      <ol>
        <li v-for='a in searchedArticles' :key='a.id'>
          {{ a.item.mainTitle }}
        </li>
      </ol>
    </div>
    <div class='controls'>
      <button :class="clearButtonClass" @click='clearSearch'>✖</button>
    </div>
  </div>
</template>
<style lang='scss' scoped>

button.clear-btn {
  width: 40px;
  height: 100%;
  background-color: white;
  padding: 0;
  border: none;
  display:none;
  &:focus{
    outline: none;
  }
  &.can-clear{
    display:initial;
  }

}

.search {
  height: 35px;
  display:flex;
  position: relative;
  .pre-search{
    width:20px;
    height:100%;
    padding:0;
    margin:0;
    background-color:var(--white);
    &::before{
      content:'>';
      display:flex;
      justify-content: center;
      align-items: center;
      height:100%;
      color:var(--primary);
    }
  }

  .search-select {
    width: 250px;
    height: 100%;
    padding: 0;
    input[type='text'] {
      width: 100%;
      height: 100%;
      padding-left:10px;
      margin: 0;
      border: none;
      box-sizing: border-box;
      &::placeholder {
        padding-left: 10px;
      }
      &:focus {
        outline:none;
        box-shadow: 0 0 10px 0 #ffffffcc;
      }
    }

    input:valid:focus + ol {
      display: block;
      animation-name: OpenSearch;
      animation-duration: 0.1s;
      animation-fill-mode: forwards;
      border: 1px solid var(--secondary);

    }

    /*Set Max Height*/
    ol {
      display: none;
      width:250px;
      padding: 0;
      margin: 0;
      max-height: 160px;
      overflow: hidden scroll;
      li:first-child {
        border-top: 1px solid var(--secondary);
      }

      li:last-child {
        border-bottom: none;
      }

      li {
        display: flex;
        width: 100%;
        height: 40px;
        background-color: var(--white);
        align-items: center;
        border-bottom: 1px solid var(--secondary);
        pointer-events: auto;
        color: var(--base);
        padding-left:10px;
        cursor:pointer;
        &:hover {
          background-color: var(--selected);
          color:white;
        }
      }
    }
  }
  .controls{
    height:100%;
    position:relative;
    right:40px;
  }
}
</style>
<script lang='ts'>
import ArticleModel from '@/model/ArticleModel'
import { Options, Vue } from 'vue-class-component'
import Fuse from 'fuse.js'

@Options({})
export default class Search extends Vue {
  searchOptions = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: ['mainTitle', 'subTitle', 'tags', 'description']
  }

  fuse!: Fuse<ArticleModel>
  /**
   * v-model for search
   */
  searchText = ''
  /*
   */
  get searchedArticles (): Fuse.FuseResult<ArticleModel>[] {
    this.fuse = new Fuse(this.$store.state.articles, this.searchOptions)
    const result = this.fuse.search(this.searchText)
    return result
  }

  get clearButtonClass (): string {
    return this.searchText === ''
      ? 'clear-btn'
      : 'clear-btn can-clear'
  }

  /**
   *
   */
  clearSearch () {
    this.searchText = ''
  }

  /**
   * '@input' for search text
   */
  search (e: InputEvent) {
    const input = e.target as HTMLInputElement
    // list of strings seperated by space
  }
}
</script>
