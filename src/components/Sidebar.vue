<!--
  Sidebar navigation. Sidebar opened state is stored in $store
-->
<template>
<div :class="modalClass">
    <button v-on:click="close" class="close-btn">✖</button>
    <div class="sidebar-content-right">
    <div class="sidbar-content-wrapper">
      <h3 class="title">Menu</h3>
      <ul class="side-items">
        <li>
          <router-link to="/" @click="close">
            <i class="fas fa-home"></i>
            home
          </router-link>
        </li>
        <li>
          <router-link to="/about" @click="close">
            <i class="fas fa-address-card"></i>
            about
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</div>

</template>
<style lang="scss">

/* Media Queries */
@media screen and (min-width:0px) and (max-width:768px){
  .sidebar-content-right{
    --sidebar-width:150px;
  }
}
@media screen and (min-width:768px){
  .sidebar-content-right{
    --sidebar-width:300px;
  }
}
/* List stying for sidebar items */
ul.side-items {
  list-style-type: none; /* Remove bullets */
  margin: 0;
  padding: 0;
  li {
    height: 40px;
    width: 100%;
    padding: 0 0 10px 0;
    border-left: 2px solid var(--primary);
    border-top: 2px solid var(--primary);
    border-left-width: 2px;
    border-left-color:var(--primary);
    transition: border-left-width 0.2s;
    display: flex;
    align-items: center;
    color:white;
    &:hover {
      border-left-width: 6px;
      border-left-color: white;
      border-top: 2px solid ghostwhite;
      color: white;
      > a {
        color: white;
      }
    }
    > a {
      width: 100%;
      padding: 0;
      text-decoration: none;
      margin-top: 10px;
      color: var(--base);
      padding-left: 5px;
    }
  }
}

 .sidebar-content-right {
    width: var(--sidebar-width);
    height: 100%;
    float: right;
    background-color: var(--primary);
    transform-origin: top right;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
    .title{
      margin-left:10px;
    }
  }
  .opened > .sidebar-content-right {
    animation-name: enter_right;
  }
  .closed > .sidebar-content-right {
    animation-name: leave_right;
  }

/* Animations */

@keyframes enter_right {
  0% {
    opacity: 0.000001;
    width: 0;
    pointer-events: none;
  }
  100% {
    pointer-events: auto;
  }
}

@keyframes leave_right {
  0% {
    opacity: 0;
    width: var(--sidebar-width);
    pointer-events: none;
  }
  100% {
    pointer-events: auto;
    width: 0px;
  }
}
</style>
<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import ref from 'vue'

@Options({})
export default class Sidebar extends Vue {
  /*
        opens the sidebar
     */
  public open () {
    this.$store.commit('setSidebarOpened', true)
  }

  /**
     * Closes the Sidebar
     */
  public close () {
    this.$store.commit('setSidebarOpened', false)
  }

  /**
     * Toggles the Sidebar from its current state to the opposite
     */
  public toggle () {
    this.$store.commit('toggleSidebar')
  }

  /**
     * getter for the modal class containing the Sidebar
     */
  public get modalClass () {
    return this.$store.state.sidebarOpened ? 'modal opened' : 'modal closed'
  }
}
</script>
