<template>
<div :class="modalClass">
    <button v-on:click="close" class="close-btn">✖</button>
    <div class="sidebar-content-right">
    <div class="sidbar-content-wrapper">
      <h3 class="title">menu</h3>
      <ul class="no-bullets">
        <li>
          <router-link to="/">
            <i class="fas fa-home"></i>
            home
          </router-link>
        </li>
        <li>
          <router-link to="/about">
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
ul.no-bullets {
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
    animation-name: _opened;
  }
  &.closed {
    animation-name: _closed;
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
  }
  .sidebar-content-right {
    width: 300px;
    height: 100%;
    float: right;
    background-color: var(--primary);
    transform-origin: top right;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
  }
  &.opened > .sidebar-content-right {
    animation-name: enter_right;
  }
  &.closed > .sidebar-content-right {
    animation-name: leave_right;
  }
}
@keyframes _closed {
  0% {
    opacity: 100%;
    pointer-events: auto;
  }
  100% {
    opacity: 0%;
    pointer-events: none;
  }
}
@keyframes _opened {
  0% {
    opacity: 0%;
    pointer-events: none;
  }
  100% {
    opacity: 100%;
    pointer-events: auto;
  }
}

@keyframes side_closed {
  0% {
    opacity: 100%;
    width: 300px;
    pointer-events: auto;
  }
  100% {
    opacity: 0%;
    width: 0;
    pointer-events: none;
  }
}
@keyframes side_opened {
  0% {
    opacity: 0%;
    width: 0;
    pointer-events: none;
  }
  100% {
    opacity: 100%;
    width: 300px;
    pointer-events: auto;
  }
}

@keyframes enter_right {
  0% {
    opacity: 0%;
    width: 0;
    pointer-events: none;
  }
  100% {
    pointer-events: auto;
  }
}

@keyframes leave_right {
  0% {
    opacity: 0%;
    width: 300px;
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
    opened = false;

    public open () {
      this.opened = true
      this.$emit('sidebar-changed', this.opened)
    }

    public close () {
      this.opened = false
      this.$emit('sidebar-changed', this.opened)
    }

    public toggle () {
      this.opened = !this.opened
      this.$emit('sidebar-changed', this.opened)
    }

    public get modalClass () {
      return this.opened ? 'modal opened' : 'modal closed'
    }
}
</script>
