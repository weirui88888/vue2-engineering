<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="logo" />
    <h1>dev</h1>
  </div>
</template>

<script>
import apier from '@/api/request.js'
console.dis(apier)
export default {
  name: 'App',
  props: {},
  created() {},
  methods: {}
}
</script>

<style>
.logo {
  display: block;
  margin: 20px auto;
}
</style>
