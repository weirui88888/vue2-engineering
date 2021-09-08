<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="logo" />
    <h1>dev</h1>
  </div>
</template>

<script>
import apier from '@/api/request.js'

export default {
  name: 'App',
  mounted() {
    document.addEventListener('click', () => {
      console.log(window.a.l)
    })
  }
}
</script>

<style>
.logo {
  display: block;
  margin: 20px auto;
}
</style>
