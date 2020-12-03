
<template>
        <router-link :to="link">

    <span class="tag">
        {{tagTxt}}
    </span>
        </router-link>

</template>

<style scoped lang="scss">
  .tags{
    margin:5px;
    display:flex;
    justify-content: flex-end;
  }
  .tag{
    padding: 0.5em;
    &:before{
      content:'#'
    }
    border-radius:1em;
    background-color: var(--secondary);
    color:var(--white);
  }
  .tag + .tag{
    margin-left:5px;
  }
  </style>
<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
  props: {
    tagTxt: ''
  }
})
export default class Tag extends Vue {
    tagTxt!: string
    get link (): string {
      return `/?tag=${this.tagTxt}`
    }
}
</script>
