<template>
  <div class="flex flex-col justify-center items-center w-screen h-screen gap-8">
    <h1 class="uppercase font-fnt text-5xl">Login</h1>
    <p v-if="errors.length > 0" class="bg-red-300 text-txt px-3 py-2.5">{{errors}}</p>
    <div class="flex flex-col justify-start gap-2">
        <label for="email" class="font-bold text-txt">Email</label>
        <input type="email" name="email" id="email" class="bg-white text-txt px-6 py-2.5 rounded-sm" v-model="email">
    </div>
    <div class="flex flex-col justify-start gap-2">
        <label for="password" class="font-bold text-txt">Password</label>
        <input type="password" name="password" id="password" class="bg-white text-txt px-6 py-2.5 rounded-sm" v-model="password">
    </div>
    <div class="flex flex-col justify-start gap-2">
        <button class="bg-txt text-ctn px-6 py-2.5 hover:bg-active uppercase rounded-sm font-bold" v-on:click="login()">Login</button>
    </div>
  </div>
</template>

<script>
export default {
    layout: 'LoginLayout',
    data() {
        return {
            email: '',
            password: '',
            errors: '',
        }
    },
    methods: {
        login() {
            this.$axios.post('/api/login', {
                email: this.email,
                password: this.password,
            })
            .then(response => {
                sessionStorage.setItem('token', response.data.token);
                this.$router.push('/');
            })
            .catch(error => {
                this.errors = error.response.data.message;
            })
        }
    },
}
</script>

<style>

</style>