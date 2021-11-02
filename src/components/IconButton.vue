<template>
  <a id="iconButton" :href="this.href">
    <i :class="this.src" id="icon"></i>
    <slot></slot>
  </a>
</template>

<script>
export default {
    props:{
        src: String,
        href: String
    }
}
</script>

<style scoped>
    #iconButton{
        width: 60px;
        height: 60px;
        margin: 0 0 10px 0;
        border: none;
        border-radius: 8px;
        background-color: transparent;
        color:var(--pure-green)
    }
    #iconButton:hover{
      background-color: var(--hover-cyan);
    }
    #icon{
      font-size: 2em;
    }
</style>