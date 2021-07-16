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
      let a = 123
    }
  }
}
</script>

<style>
#app {
  width: 100px;
  height: 200px;
  color: #cedceb;
}
</style>
