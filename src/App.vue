<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="say" />
    <HelloWorld msg="Welcome to Your Vue.js App" @click="say" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  props: {},
  data() {},
  methods: {
    say() {
      var a = 123
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
