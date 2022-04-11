<template>
  <div>
    <div class="container mt-12 mx-auto">
      <div class="w-full h-fill mb-12 flex flex-row justify-around items-end gap-4">
        <div class="w-1/3">
          <label for="search" class="w-full text-3xl font-fnt">Search</label>
          <input class="border-2 border-txt rounded-md p-4 w-full" type="text" name='search' placeholder="something something" v-model="searchText">
        </div>
        <div class="w-1/3">
          <label for="search" class="w-full text-3xl font-fnt">Sort</label>
          <select class="border-2 border-txt rounded-md p-4 w-full" v-model="sortBy">
            <option value="" selected disabled>Sory By</option>
            <option value="DESC">HIGH -> LOW </option>
            <option value="ASC">LOW -> HIGH</option>
          </select>
        </div>
        <div class="w-1/3 flex flex-col justify-start">
          <input @click="applyFilter()" type="button" value="Search" class="bg-txt text-ctn p-4 hover:bg-active hover:border-active uppercase rounded-sm font-bold w-full border-2 border-txt cursor-pointer">
        </div>
      </div>
      <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <div class="flex flex-col itmes-center justify-between" v-for="piece in artPieces" :key="piece.ProductID">
        <img class="w-full h-78" src="../../assets/boring.jpg" alt="">
        <div class="bg-ctn flex flex-col justify-center items-center w-full gap-4">
          <p class="text-high">#{{piece.ProductID}}</p>
          <h3 class="font-fnt text-3xl">{{piece.ProductName}}</h3>
          <div class="flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
            </svg>
            <p class="text-lg">{{piece.ProductPrice}}</p>
          </div>
          <button class="bg-txt text-ctn px-6 py-2.5 hover:bg-active uppercase rounded-sm font-bold w-full" v-on:click="showPiece(piece.ProductID)">SHOW</button>
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
      artPieces: [],
      sortBy: '',
      searchText: '',
    }
  },

  methods: {
    showPiece(pieceID) {
      this.$router.push('galery/show/' + pieceID);
    },
    applyFilter() {
      this.$axios.post('/api/galery/search', {searchText: this.searchText, sortBy: this.sortBy,})
      .then(response => {
        console.log(response.data);
        this.artPieces = response.data;
      })
      .catch(error => {
        console.log(error);
      })
    }
  },

  mounted() {
    this.$axios.get('/getProducts', {}).then(response => {;
      this.artPieces = response.data;
    }).catch(error => {
      console.log(error);
    });
  }
}
</script>

<style>
</style>