<template>
<div>
  <div class="mx-auto mt-20">
    <section class="flex flex-row justify-between gap-4" v-if="isLoggedIn === 'false'">
      <div class="flex flex-col justify-center items-center w-full gap-4">
        <h2 class="text-3xl font-fnt">Artist</h2>
        <p>Are you a digital artist and you want to sell your digital art?</p>
        <button class="bg-txt text-ctn px-6 py-2.5 hover:bg-active uppercase rounded-sm font-bold" v-on:click="toLogin()">Login</button>
        <h3>Don't have an account yet?</h3>
        <button class="bg-txt text-ctn px-6 py-2.5 hover:bg-active uppercase rounded-sm font-bold" v-on:click="toLogin()">Register</button>
      </div>
    </section>
  </div>
</div>
</template>

<script>

export default {
  layout: 'default',
  data() {
    return {
      isLoggedIn: sessionStorage.getItem('isLoggedIn').toString(),
    }
  },

  methods: {
    toLogin() {
      this.$router.push('/login');
    },
  },
}
</script>
