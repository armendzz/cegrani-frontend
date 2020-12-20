<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 ">
          <Featured-content />
          <Weather />

          <div class="alert mt-2 alert-info" role="alert">
            Identifikohu autokton duke krijuar nje email address
            <strong>@cegrani.mk</strong>
            <br />
            <router-link to="/mail">
              Kliko Ketu per te krijuar nje Email
            </router-link>
          </div>
          <div class="card">
            <div class="card-header">Sherbime Elektronike</div>
            <div class="card-body">
              <div class="row">
                <div class="mr-1 ml-1 mt-2">
                  <a
                    href="https://www.e-urbanizam.mk/najava.nspx"
                    target="_blank"
                    class="btn btn-lg btn-primary"
                    >e-Urbanizmi</a
                  >
                </div>
                <div class="mr-1 ml-1 mt-2">
                  <a
                    href="http://www.test.gradezno-zemjiste.mk/Default.aspx"
                    target="_blank"
                    class="btn btn-lg btn-primary"
                    >e-Toka Ndertimore</a
                  >
                </div>
                <div class="mr-1 ml-1 mt-2">
                  <a
                    href="https://www.gradezna-dozvola.mk/Account/Login?ReturnUrl=%2f"
                    target="_blank"
                    class="btn btn-lg btn-primary"
                    >e-Leje Ndertimi</a
                  >
                </div>
                <div class="mr-1 ml-1 mt-2">
                  <a
                    href="https://gostivar.eregulations.org/?l=sq"
                    target="_blank"
                    class="btn btn-lg btn-primary"
                    >e-Regullativa</a
                  >
                </div>
                <div class="mr-1 ml-1 mt-2">
                  <a
                    href="http://62.162.98.17/e-tax/"
                    target="_blank"
                    class="btn btn-lg btn-primary"
                    >e-Tatime</a
                  >
                </div>
                <div class="mr-1 ml-1 mt-2">
                  <a
                    href="https://www.evnonline.mk/index/evnhome"
                    target="_blank"
                    class="btn btn-lg btn-primary"
                    >EVN-Online</a
                  >
                </div>
              </div>
            </div>
          </div>
          <ShortGallery />
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
    Info,
  },
};
</script>
<style scoped></style>
