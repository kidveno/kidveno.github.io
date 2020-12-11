 <!--
 Navigation Component. This also contains the 'Sidebar' modal with element reference to
 open and close the modal
 -->
<template>
  <nav class="main-nav">
    <span class="nav-brand">
      {{ name }}
    </span>
    <Search></Search>
    <div class="nav-end">
      <button class="nav-btn" v-on:click="openSidebar">
     <i class="fas fa-bars"></i>
    </button>
    </div>
    <Sidebar ref="sidebar"></Sidebar>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Sidebar from '@/components/Sidebar.vue'
import Search from '@/components/Search.vue'

@Options({
  components: {
    Sidebar, Search
  }
})
export default class Nav extends Vue {
  /**
   * Name data
   */
  name ='Ventroy Rolle';
  $refs!: {
    sidebar: Sidebar;
  }

  /**
   * Opens the sidebar
   */
  openSidebar () {
    if (this.$refs.sidebar) {
      this.$refs.sidebar.open()
    }
  }

  /**
   * Closes the sidebar
   */
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

/**
  Navigation Button
 */
.nav-btn{
  background-color: transparent;
  border:none;
  color:white;
  font-size:24px;
  position:absolute;
  right:40px;
  &:focus{
    box-shadow: 0 0 10px 0 #ffffffcc;
    outline:none;
  }
}
/**navitation element */
nav.main-nav {
  width: 100%;
  min-height:60px;
  background-color: var(--primary);
  padding-left: 10px;
  display:flex;
  align-items: center;
  z-index: 2;
  position: sticky;

  /*
      Branding Style
   */
  .nav-brand {
    color: var(--secondary);
    background-color: var(--white);
    padding: 6px;
    margin-right: 5px;
    font-size: 10pt;
    min-width:13ch;
    border-radius: 1em;
    font-weight: bold;
    height:2ch;
    text-align: center;
    &:hover{
      box-shadow: 0 0 10px 0 var(--white);

    }
  }
  /*
      End of the navitation
   */
  .nav-end {
    align-items:center;
    margin-right:10px;
    display:inline-flex;
    height:100%;
    /* links */
    a {
      height: 100%;
      font-size: 10pt;
      color: var(--white);
      display: flex;
      text-align: center;
      align-items: center;
      margin-left:15px;
      /** Icon styles */
      i {
        margin: 10px;
      }
      /*  a:hover */
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
