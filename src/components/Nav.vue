<template>
  <nav class="main-nav">
    <span class="nav-start">
      {{ name }}
    </span>
    <div class="nav-end">
       <router-link to="/">Home</router-link>
       <router-link to="/about">About</router-link>
    </div>
    <Search></Search>
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

/*Phone */
@media screen and (min-width:0px) and (max-width:480px){
  .nav-end{
    display:none;
  }
}
/* tablet & small laptops */
@media screen and (min-width:480px) and (max-width:768px){
  .nav-end{
    display:hidden;
  }
}
/* Everything else */
@media screen and (min-width:768px){
  .nav-end{
    width:80%;

  }
}
nav.main-nav {
  width: 100%;
  height: 60px;
  background-color: var(--primary);
  padding-left: 10px;
  display:flex;
  align-items: center;
  z-index: 2;
  .nav-start {
    color: var(--secondary);
    background-color: var(--white);
    margin: 10px;
    padding: 6px;
    font-size: 10pt;
    width:13ch;
    border-radius: 1em;
    font-weight: bold;
    text-align:center;
    height:2ch;
  }

  .nav-end {
    align-items:center;
    margin-right:10px;
    display:flex;
    height:100%;
    a {
      height: 100%;
      font-size: 10pt;
      color: var(--white);
      display: flex;
      text-align: center;
      align-items: center;
      margin-left:15px;

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
