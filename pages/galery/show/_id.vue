<template>
  <div>
    <Navigation />
    <div class="container mt-12 mx-auto w-full h-full">
        <div class="flex flex-col justify-center items-center w-full h-full">
            <div>
            <img src="../../../assets/boring.jpg" alt="">
        <div class="bg-ctn flex flex-col justify-center items-center w-full gap-4">
          <p class="text-high">#{{artPiece.ProductID}}</p>
          <h3 class="font-fnt text-3xl">{{artPiece.ProductName}}</h3>
          <div class="flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
            </svg>
            <p class="text-lg">{{artPiece.ProductPrice}}</p>
          </div>
            <button v-if="pieceNotInCart" class="bg-txt text-ctn px-6 py-2.5 hover:bg-active uppercase rounded-sm font-bold w-full" v-on:click="addToCart(artPiece.ProductID)">Add to cart</button>
            <input v-else class="bg-gray-400 text-ctn px-6 py-2.5 uppercase rounded-sm font-bold w-full" disabled type="button" value="Login to add to cart">
        </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            artPiece: {},
            pieceNotInCart: true
        }
    },

    methods: {
        getArtPiece() {
            this.$axios.post('/getProduct', {id: parseInt(this.$route.params.id)}).then(response => {
                this.artPiece = response.data[0];
                console.log(response.data);
            })
            .catch (error => {
                console.log(error);
            });
        },
        addToCart(){
            this.$store.dispatch('addToCart', this.artPiece);
            this.$router.push('/cart');
        }
    },

    created() {
        this.getArtPiece();
    }
}
</script>

<style>

</style>