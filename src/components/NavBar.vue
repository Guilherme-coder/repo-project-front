<template>
  <div class="navBody">
    <div class="buttonArea">
       <IconButton>
         <img width="80px" height="80px" src="https://suap.ifrn.edu.br/media/alunos/271617.CpwksVKeiFpP.jpg" alt="massa">
       </IconButton>
    </div>

     <div class="buttonArea">
       <IconButton :src="'far fa-user-circle'"/>
     </div>

     <div class="buttonArea">
       <IconButton :src="'fas fa-shopping-cart'"/>
     </div>

     <div class="buttonArea">
       <IconButton :src="'far fa-edit'"/>
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
    position: fixed;
    width: 10vw;
    height: 100vh;
    background-color: var(--dark-blue);
    box-shadow: 10px 1px 8px #202020;
  }
  .buttonArea{
    border-radius: 8px;
    margin-bottom: 15vh;
  }
</style>