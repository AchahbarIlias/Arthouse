<template>
  <div>
      <Navigation />
      <div class="container mx-auto w-full mt-12">
          <p>total price: {{total}}</p>
          <div class="flex flex-col justify-center items-center w-full gap-4">
              <div class="flex lg:flex-row flex-col bg-ctn" v-for="item in this.$store.state.cart" :key="item.id">
                  <img src="../assets/boring.jpg" alt="">
                  <div class="bg-ctn flex flex-col lg:w-96 w-full justify-between">
                      <div class="p-4">
                        <h3 class="font-fnt text-3xl">{{item.name}}</h3>
                        <p>{{item.description}}</p>
                        <p>{{item.artist}}</p>
                      </div>
                      <div>
                                  <div class="flex flex-row items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
            </svg>
            <p class="text-lg">{{item.price}}</p>
          </div>
                        <button class="bg-txt text-ctn px-6 py-2.5 hover:bg-active uppercase rounded-sm font-bold w-full" v-on:click="removeFromCart(item.id)">Remove from cart</button>
                      </div>
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
            total: 0
        }
    },
    methods: {
        removeFromCart(id) {
            this.$store.dispatch('removeFromCart', id);
            this.calcTotal();
        },
        calcTotal() {
            this.total = 0;
            this.$store.state.cart.forEach(cart => {
                this.total += cart.price;
            });
        }
    },

    mounted() {
        this.calcTotal();
    },
}
</script>

<style>

</style>