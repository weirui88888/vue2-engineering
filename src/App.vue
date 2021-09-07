<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="logo" />
    this is master , i1 want to have a try about sentry ha
  </div>
</template>

<script>
import apier from '@/api/request.js'
export default {
  name: 'App',
  props: {},
  mounted() {
    apier.get('/abc').then(res => {
      console.log(res)
    })
  },
  created() {
    console.logg('d3s')
  }
}
</script>

<style>
.logo {
  display: block;
  margin: 20px auto;
}
</style>
