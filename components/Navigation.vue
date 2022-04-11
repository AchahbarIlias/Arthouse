<template>
    <nav class="py-8 bg-high w-full">
        <div class="flex flex-row justify-between items-center w-full px-8 md:px-14 lg:px-24">
            <h1 class="text-5xl font-fnt h-12">Arthouse</h1>
            <div class="lg:hidden flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 20 20" fill="currentColor" v-on:click="toggleMenu()">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="lg:flex flex-row hidden font-fnt text-3xl justify-between items-center gap-8 uppercase">
                <NuxtLink :to="{ name: 'index' }" class="text-txt border-b-2 border-high hover:border-ctn">Home</NuxtLink>
                <NuxtLink :to="{ name: 'galery' }" class="text-txt border-b-2 border-high hover:border-ctn">Galery</NuxtLink>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-txt h-12 w-12 cursor-pointer hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-if="isLoggedIn === 'true'" v-on:click="gotToCart()">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-txt h-12 w-12 cursor-pointer hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-if="isLoggedIn === 'true'" v-on:click="goToProfile()">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-txt h-12 w-12 cursor-pointer hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-if="isLoggedIn === 'true'" v-on:click="logout()">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
            </div>
        </div>
        <div v-if="showMenu" class="flex flex-col justify-center items-center mt-4 gap-4 text-xl">
                            <NuxtLink :to="{ name: 'index' }" class="text-txt border-b-2 border-high hover:border-ctn">Home</NuxtLink>
                <NuxtLink :to="{ name: 'galery' }" class="text-txt border-b-2 border-high hover:border-ctn">Galery</NuxtLink>
                <div class="flex flex-row justify-around gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-txt h-12 w-12 cursor-pointer hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-if="isLoggedIn === 'true'" v-on:click="gotToCart()">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-txt h-12 w-12 cursor-pointer hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-if="isLoggedIn === 'true'" v-on:click="goToProfile()">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-txt h-12 w-12 cursor-pointer hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-if="isLoggedIn === 'true'" v-on:click="logout()">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            isLoggedIn: sessionStorage.getItem('isLoggedIn').toString(),
        }
    },
    methods: {
        logout() {
            sessionStorage.removeItem('token');
            sessionStorage.setItem('isLoggedIn', false);
            this.$router.push('/')
        },
        gotToCart() {
            this.$router.push('/cart');
        },
        goToProfile() {
            this.$router.push('/profile');
        },
        toggleMenu() {
            this.showMenu = !this.showMenu;
        }
    }
}
</script>

<style>
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  @apply text-active;
}
</style>