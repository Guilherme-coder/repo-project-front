<template>
    <div class="card">
        <img class="image img-fluid" :src="this.url" alt="">
        <div class="text_area">
            <h3 class="title">{{ this.title }}</h3>
            <div class="price">
                <h2 class="price_value">R$ {{ this.price }}</h2>
                <h3 class="price_portion"> em até 10x de R$ {{ calculatePrice() }}</h3>
                <StarsRatting/>
            </div>
        </div>
    </div>
</template>

<script>
import StarsRatting from '@/components/StarsRatting'
export default {
    props: {
        url: String,
        title: String,
        price: Float32Array
    },
    methods: {
        calculatePrice() {
            let pricePerMonth = this.price / 10;
            return pricePerMonth.toFixed(2);
        }
    }
    ,
    components:{
        StarsRatting
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
    .card {
        padding: .3em;
        background-color: grey;
        width: 60%;
        min-height: 250px;
        display: flex;
        flex-direction: row;
        margin: 3em auto;
        box-shadow: 5px 5px 30px #000;
    }
    .image {
        width: 30%
    }
    .text_area{
        padding: 2em 1em;
        width: 70%;
        text-align: left;
    }
    .price {
        position: absolute;
        bottom: 15%;
    }
    .title, .price_value, .price_portion {
        color: #e6e6e6;
        font-family: 'Ubuntu', sans-serif;
    }
</style>