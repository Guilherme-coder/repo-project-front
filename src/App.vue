<template>
  <div id="app">
    <navBar />
  </div>
</template>

<script>
import NavBar from './components/navBar.vue'
import product from './service/products/ProductsService'

export default {
  name: 'App',
  components: {
    NavBar
  },
  mounted() {
    product.index()
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
  margin-top: 0px;
}
</style>
