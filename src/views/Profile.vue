<template>
  <div>
    <div class="container">
        <p>emri: {{ this.$store.state.currentUser.user.name }}</p>
        <p>e-mail: {{ this.$store.state.currentUser.user.email }}</p>
        <p>i verifikuar: {{ this.$store.state.currentUser.user.is_verified }}</p>
        <p>antar prej: {{ new Date(this.$store.state.currentUser.user.created_at) | moment("D MMMM YYYY") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {

    },
  data() {
    
    return {
      user: ''
    };
  },
  mounted() {
    
  }
};
</script>

<style></style>
