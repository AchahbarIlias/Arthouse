<template>
  <div>
      <ul>
          <li>{{user.username}}</li>
          <li>{{user.email}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
           user: this.$store.state.user,
        }
    },
}
</script>

<style>

</style>