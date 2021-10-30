<template>
  <div class="navBody">
     <div class="buttonArea">
       <IconButton :src="'../assets/icons/user.svg'" :alt="'perfil'"/>
     </div>

     <div class="buttonArea">
       <IconButton/>
     </div>
     
     <div class="buttonArea">
       <IconButton/>
     </div>
  </div>
</template>

<script>
import IconButton from './IconButton.vue'
export default {
  components:{
    IconButton
  }
}
</script>

<style>
  .navBody{
    background-color: var(--dark-blue) ;
    width: 10vw;
    height: 100vh;
  }
  .buttonArea{
    border-radius: 8px;
  }
</style>