<template>
  <div class="page-container">
    <Nav></Nav>
    <div class="hero">
      <div class="hero">
        <div class="hero-wrapper">
          <img class="rounded" src="assets/PGT.png" width="50" height="50" />
          <p class="img-wrapped">
            Developer with a focus on .NET (ASP Core C#) and Web (HTML, VueJs,
            Typescript )
          </p>
        </div>
      </div>
    </div>
    <div class="page-content">
      <router-view />
    </div>
    <footer>
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
  width: 100%;
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
    height: 100%;
  }
}

.page-content {
  background-color: var(--white);
  min-width: 400px;
  max-width: 1080px;
  min-height: 400px;
  overflow-y: scroll;
  padding: 1em;
  color: var(--secondary);
  article {
    border-bottom: 1px double var(--base);
  }
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
</style>
<script lang="ts">
import { Vue, Options } from 'vue-class-component' // no default import, used { Prop } to import the decorator
import Nav from '@/components/Nav.vue' // @ is an alias to /src
import ArticleModel from './model/ArticleModel'
import axios from 'axios'
import util from './util'

const articleDataPath = './assets/articles.json'

@Options({
  components: {
    Nav
  }
})
export default class App extends Vue {
  articles!: ArticleModel[];

  mounted () {
    console.log(util.GetBaseUrl())
    axios.get(articleDataPath)
      .then(response => {
        console.log(response)
        console.log(response.data)
      })
  }
}
</script>
