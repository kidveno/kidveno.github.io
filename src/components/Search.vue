<template>
  <div class="search-select">
    <input placeholder="Search" required="required" type="text" />
    <ol>
      <li>No</li>
      <li>real search</li>
      <li>here</li>
      <li>just</li>
      <li>markup</li>
    </ol>
  </div>
</template>
<style lang="scss" scoped>
.search-select {
  width: 300px;
  height: 35px;
  padding: 0;
  margin: 0;
  border: 2px solid var(--secondary);

  input[type="text"] {
    display: block;
    width: 100%;
    height: 35px;
    padding: 0;
    margin: 0;
    border: none;
    border-bottom: 1px solid var(--base);
    &::placeholder {
      padding-left: 10px;
    }
    &:focus {
      outline: 4px double var(--secondary);
    }
  }

  input:valid:focus + ol {
    display: block;
    animation-name: OpenSearch;
    animation-duration: 0.1s;
    animation-fill-mode: forwards;
  }

  /*Set Max Height*/
  ol {
    display: none;
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    max-height: 160px;
    overflow-y: scroll;
    border: 1px solid var(--secondary);
    li:first-child {
      border-top: 1px solid var(--secondary);
    }

    li:last-child {
      border-bottom: none;
    }

    li {
      display: flex;
      width: 100%;
      background-color: var(--white);
      justify-content: center;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid var(--secondary);
      pointer-events: auto;
      color: var(--base);

      &:hover {
        background-color: var(--white);
      }
    }
  }
}
</style>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {},
  data: () => {
    return {}
  }
})
export default class Home extends Vue { }
</script>
