<template>
  <div>
      <Navigation />
      <Nuxt/>
  </div>
</template>

<script>
export default {
    methods: {
        // async validateUser() {
        //     if(sessionStorage.getItem('token') !== null) {
        //         await this.$axios.get('/api/validate', {
        //             headers: {
        //                 Authorization: sessionStorage.getItem('token'),
        //             }
        //         }).then (response => {
        //             sessionStorage.setItem('isLoggedIn', true);
        //         }).catch(error => {
        //             sessionStorage.setItem('isLoggedIn', false);
        //             console.log(error.response.data);
        //         })
        //     } else {
        //         sessionStorage.setItem('isLoggedIn', false);
        //     }
        // },
    },
    async mounted() {
        // await this.validateUser();
    }
}
</script>

<style>

</style>