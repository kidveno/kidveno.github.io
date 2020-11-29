<template>
  <nav class="main-nav">
    <span class="nav-start">
      {{ name }}
    </span>
    <button class="nav-btn" v-on:click="openSidebar">
      <i class="fas fa-bars"></i>
    </button>
    <Sidebar ref="sidebar"></Sidebar>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Sidebar from '@/components/Sidebar.vue'

@Options({
  components: {
    Sidebar
  }
})
export default class Nav extends Vue {
  name ='Ventroy Rolle';
  $refs!: {
    sidebar: Sidebar;
  }

  openSidebar () {
    if (this.$refs.sidebar) {
      this.$refs.sidebar.open()
    }
  }

  closeSidebar () {
    if (this.$refs.sidebar) {
      this.$refs.sidebar.close()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

/*Phone */
@media screen and (min-width:0px) and (max-width:480px){
  nav.main-nav{
    flex-wrap: wrap;
    .nav-end{
    display:list-item;
  }
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

.nav-btn{
  background-color: transparent;
  border:none;
  color:white;
  font-size:24px;
  position:absolute;
  right:40px;
}

nav.main-nav {
  width: 100%;
  min-height:60px;
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
    min-width:13ch;
    border-radius: 1em;
    font-weight: bold;
    height:2ch;
    text-align: center;
  }

  .nav-end {
    align-items:center;
    margin-right:10px;
    display:inline-flex;
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
