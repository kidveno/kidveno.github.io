<template>
  <nav class="main-nav">
    <span class="nav-lead">
      {{ name }}
    </span>
    <Search></Search>
    <div class="nav-end">
       <router-link to="/">Home</router-link>
       <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Search from '@/components/Search.vue'

@Options({
  components: {
    Search
  }
})
export default class Nav extends Vue {
  name ='Ventroy Rolle';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav.main-nav {
  width: 100%;
  height: 60px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  padding-left: 10px;

  span.nav-lead {
    color: var(--secondary);
    background-color: var(--white);
    margin: 10px;
    padding: 6px;
    font-size: 12pt;
    border-radius: 1em;
    font-weight: bold;
  }

  div.nav-end {
    display: flex;
    height: 100%;

    a {
      height: 100%;
      font-size: 10pt;
      color: var(--white);
      display: flex;
      text-align: center;
      align-items: center;

      i {
        margin: 10px;
      }

      &:hover {
        color: var(--primary);
        background-color: var(--white);
        border-bottom: 4px solid var(--primary);
        z-index: 1;
      }
    }
  }
}
</style>
