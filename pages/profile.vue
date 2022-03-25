<template>
  <div v-if="this.$auth.loggedIn">
      <Navigation />
      <ul>
          <img :src="this.$auth.user.picture" alt="profile_pic">
          <li>{{this.$auth.user.nickname}}</li>
          <li>{{this.$auth.user.name}}</li>
          <li>{{this.$auth.user.email}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    mounted() {
        if (!this.$auth.loggedIn) {
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>