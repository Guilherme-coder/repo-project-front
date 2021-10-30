<template>
  <button>
    <img :src="this.src" :alt="this.alt">
  </button>
</template>

<script>
export default {
    props:{
        src: String,
        alt: String
    }
}
</script>

<style scoped>
    button{
        width: 60px;
        height: 60px;
        margin: 0 0 10px 0;
        background-color: transparent;
        color:var(--dark-gold)
    }
</style>