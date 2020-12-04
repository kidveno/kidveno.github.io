<!--
  Search Component for searching 'articles'. Uses Fuse.js for filtering results
-->
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
      <ol class="results">
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
/*
    Button style for control that will clear the search selection
 */
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
/* Search component container */
.search {
  height: 35px;
  display:flex;
  position: relative;
  /* Style of content to appear before the components 'input' element */
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
  /* Style of the container for the search component's 'input' element*/
  .search-select {
    width: 250px;
    height: 100%;
    padding: 0;
  /* Style of the search component's 'input' element */
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
        box-shadow: 0 0 10px 0 var(--white);
      }
    }
    /* makes the search results only visible if the 'input' is valid and in focus */
    input:valid:focus + ol.results {
      display: block;
      animation-name: OpenSearch;
      animation-duration: 0.1s;
      animation-fill-mode: forwards;
      border: 1px solid var(--secondary);

    }

    /*
      Search Results list
    */
    ol.results {
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
  /* Container for the search components controls ie the clear-btn */
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
  /**
   * Fuse.JS search options
   */
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

  private fuse!: Fuse<ArticleModel>
  /**
   * v-model for search
   */
  searchText = ''
  /**
   * getter for returning articles from store; based on @searchText
   */
  get searchedArticles (): Fuse.FuseResult<ArticleModel>[] {
    this.fuse = new Fuse(this.$store.state.articles, this.searchOptions)
    const result = this.fuse.search(this.searchText)
    return result
  }

  /**
   * getter for returning the style for the clear button.
   * clear button should be invisible when the input element is 'invalid'
   */
  get clearButtonClass (): string {
    return this.searchText === ''
      ? 'clear-btn'
      : 'clear-btn can-clear'
  }

  /**
   * Clears the search text
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
