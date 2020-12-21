<template>
  <div id="app">
    <Header v-if="this.$route.meta.layout === undefined" />
    <AdminHeader v-if="this.$route.meta.layout === 'admin'" />
    <router-view />
    <AdminFooter v-if="this.$route.meta.layout === 'admin'" />
    <Footer v-if="this.$route.meta.layout === undefined" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import AdminFooter from "./views/admin/AdminFooter";
import AdminHeader from "./views/admin/AdminHeader";

export default {
  components: {
    Header,
    Footer,
    AdminHeader,
    AdminFooter
  },
  mounted() {
    this.$store.dispatch("currentUser/checkAccessToken");
    this.$store.dispatch("currentUser/getUser");
    this.$store.dispatch("gallery/getGallery");
  }
};
</script>

<style></style>
