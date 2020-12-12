<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 ">
          <Featured-content />
          <Weather />
          <ShortGallery />
          <div class="alert mt-2 alert-info" role="alert">
            Identifikohu autokton duke krijuar nje email address
            <strong>@cegrani.mk</strong>
            <br />
            <router-link to="/mail">
            Kliko Ketu per te krijuar nje Email </router-link
                >
          </div>
        </div>
        <div class="col-lg-4 ">
          <Login
            v-if="this.$store.state.currentUser.isLoggedIn === 0"
            class="mt-2"
          />
          <Profile v-else class="mt-2" />
          <Aqi class="mt-2" />
          <Info class="mt-2" />
          <Ads class="mt-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedContent from "../components/FeaturedContent.vue";
import Weather from "../components/Weather.vue";
import ShortGallery from "../components/ShortGallery.vue";
import Login from "../components/widgets/Login.vue";
import Profile from "../components/widgets/Profile.vue";
import Info from "../components/widgets/Info.vue";
import Aqi from "../components/widgets/Aqi.vue";
import Ads from "../components/widgets/Ads.vue";
export default {
  name: "Home",
  components: {
    FeaturedContent,
    Weather,
    ShortGallery,
    Login,
    Profile,
    Ads,
    Aqi,
    Info
  }
};
</script>
<style scoped></style>
