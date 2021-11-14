<template>
  <div class="page">
    <div class="header">
      <NavBar/>
    </div>
    <div class="body">
      <SearchBar/>
      <CardProduct v-for="product in this.products" :key="product.url"
                    :url="product.url"
                    :title="product.title"
                    :price="product.price"
      />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import CardProduct from '@/components/ProductCard'
export default {
  data() {
    return {
      products: [
        {
          url: 'https://http2.mlstatic.com/D_NQ_NP_701099-MLB44648732545_012021-O.webp',
          title: 'Relógio Inteligente Smartwatch D20 Pró Bluetooth Android/ios',
          price: 66.89
        },
        {
          url: 'https://http2.mlstatic.com/D_NQ_NP_893836-MLB47766449421_102021-O.webp',
          title: 'Dell Alienware M15 R4 32gb Ram 1tb Ssd Rtx 3070 Envio Ja',
          price: 15319
        },
        {
          url: 'https://http2.mlstatic.com/D_NQ_NP_716662-MLB46652836450_072021-O.webp',
          title: 'Smart Tv 42" Philco Roku Ptv42g52 Fhd Dolbyaudio Quadcore',
          price: 1699
        },
        {
          url: 'https://http2.mlstatic.com/D_NQ_NP_957324-MLB40675199732_022020-O.webp',
          title: 'Fritadeira Elétrica Air Fry Pro Saúde 3,2l Britânia 110v',
          price: 289.90
        },
      ]
    }
  },
  components:{
    NavBar,
    SearchBar,
    CardProduct,
  }
}
</script>

<style>
  .page{
    background-color: #333333;
  }
  .body {
    padding: 2em 0;
  }
</style>