<template>
  <div class="page">
    <NavBar/>
    <SearchBar/>
  </div>

</template>

<script>
import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
export default {
  components:{
    NavBar,
    SearchBar
  }
}
</script>

<style>
  .page{
    background-color: #333333;
  }
</style>