<template>
  <div class="page-container">
    <Nav></Nav>
    <div class="page-content">
      <router-view />
    </div>
    <footer>
      <a href="https://github.com/kidveno/kidveno.github.io" target="_blank">
        <i class="fas fa-code"></i>
      </a>
      <a href="https://twitter.com/TroyGotCode" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://linkedin.com/in/ventroyrolle" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/kidveno" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://codepen.io/TroyGotCode" target="_blank">
        <i class="fab fa-codepen"></i>
      </a>
    </footer>
  </div>
  <div id="modals" class="modal-wrapper"></div>
</template>

<style lang="scss">
/*
* Theme Colors
*/
:root {
  --primary: #175686;
  --secondary: rgb(4, 0, 44);
  --base: slategrey;
  --text: #ddd;
  --white: ghostwhite;
  --shade: #f0f0f0;
  --light: #d4ffdas;
  --selected:#2788d1;
}

  button.close-btn {
    position: fixed;
    right: 2%;
    top: 2%;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 50%;
    z-index: 1;
    &:active {
      background-color: white;
      color: gray;
    }
    &:focus{
      outline:none;
      box-shadow: 0 0 10px 0 var(--white);
    }
  }

 .clear-page-btn {
    color: var(--secondary);
    background-color: transparent;
    border: 2px solid var(--secondary);
    border-radius: 50%;
    width:30px;
    height:30px;
    margin-left: 10px;
    align-items: center;
    z-index: 1;
    display:inline-flex;
    &:active {
      background-color: white;
      color: gray;
    }
    &:focus{
      outline:none;
      box-shadow: 0 0 10px 0 var(--white);
    }
  }

@media screen and (min-width:0px) and (max-width:768px){
  .page-content{
    width:100%;
  }
}
@media screen and (min-width:768px){
  .page-content{
    width:80%;

  }
}
/*
 Core styles
*/
html,
body,
#app {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
  font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans,
    Helvetica Neue, Arial, sans-serif;
  color: var(--text);
  overflow: hidden;
}

img {
  padding:10px;
}

/*
    links with no text decoration, and flexbox
*/
a {
  text-decoration: none;
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;

  i {
    width: 25px;
  }
}

.page-container {
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--base);
  margin: 0;
  padding: 0;
}

.hero {
  width: 100%;
  height: 80px;
  color: var(--light);
  background-color: var(--secondary);
  background-image: linear-gradient(
    45deg,
    var(--secondary) 0%,
    var(--primary) 15%,
    var(--secondary) 100%
  );
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  .hero-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width:80%;
    height: 100%;
  }
}

.page-content {
  background-color: var(--white);
  overflow-y: scroll;
  padding: 1em;
  color: var(--secondary);
  height:75%;
  margin-top:24px;
  width:80%;
  display:flex;
  flex-direction:column;
  box-shadow: 0 0 10px 0 #ffffffcc;
  article {
    border-bottom: 1px double var(--base);
  }
}

img.rounded{
  border-radius: 50%;
}
footer {
  width: 100%;
  height: 10%;
  background-color: var(--primary);
  top: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;

  a {
    height: 100%;
    font-size: 20pt;
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
      border-top: 10px solid var(--primary);
      z-index: 1;
    }
  }
}

/*
  Covers window and prevents elements below the modal from being clicked
 */
.modal {
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  animation-fill-mode: forwards;
  animation-duration: 0.6s;
  &.opened {
    animation-name: modal_opened;
  }
  &.closed {
    animation-name: modal_closed;
  }
}

@keyframes modal_closed {
  0% {
    opacity: 1;
    pointer-events: auto;
  }
  100% {
    opacity: 0.000001;
    pointer-events: none;
  }
}
@keyframes modal_opened {
  0% {
    opacity:  0.000001;
    pointer-events: none;
  }
  100% {
    opacity: 1;
    pointer-events: auto;
  }
}

/* Scroll bars */

::-webkit-scrollbar {
 width: 9px;
 height: 9px;
}
::-webkit-scrollbar-thumb {
 background: linear-gradient(13deg, #2788d1 14%,#175686 64%);
 border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover{
 background: linear-gradient(13deg, #2788D1 14%,#175686 64%);
}
::-webkit-scrollbar-track{
   background: var(--secondary);
 border-radius: 10px;
}
</style>
<script lang="ts">
import { Vue, Options } from 'vue-class-component' // no default import, used { Prop } to import the decorator
import Nav from '@/components/Nav.vue' // @ is an alias to /src
import util from './util'
import Search from '@/components/Search.vue'

@Options({
  components: {
    Nav
  }
})
export default class App extends Vue {
  mounted () {
    this.$store.dispatch('loadArticlesAsync')
  }
}
</script>
