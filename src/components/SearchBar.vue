<template>
    <div class="box">
        <input type="text" class="search_bar" ref="search_bar" placeholder="Buscar produtos">
        <span v-on:click="toggleBar"><i class="search fas fa-search" ref="search"></i></span>
    </div>
</template>

<script>
export default {
    mounted() {

    },
    methods: {
        toggleBar: function() {
            console.log('cliquei')
            if(this.$refs.search_bar.style.visibility == 'visible') {
                this.$refs.search_bar.style.visibility = 'hidden'
            } else {
                this.$refs.search_bar.style.visibility = 'visible'
            }
        }
    }
}
</script>

<style scoped>
    .box {
        position: absolute;
        right: 2em;
        top: 1em;
        display: flex;
        align-items: center;
    }
    .search {
        margin-left: 1em;
        color: #00ff00;
        cursor: pointer;
    }
    .search_bar {
        visibility: hidden;
        padding: .3em .4em;
        border-radius: 8px;
        border: 1px solid #00ff00;
        color: #00ff00;
        background-color: #333333;
        outline: none;
    }
    .search_bar::placeholder{
        color: #00ff00;
    }
</style>