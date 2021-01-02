<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
  <div class="card mt-2">
        <div class="card-header">{{ article.title }}</div>
        <div class="card-body">
          <img
            class="img-fluid"
            :src="'https://api.cegrani.mk/images/' + article.images"
            alt=""
          />
          <div v-html="article.text"></div>
        </div>
        <div class="card-footer">
          Publikuar: {{ article.created_at | moment("D MMMM YYYY") }} |
          Kategoria: {{ article.category.name }} | Autori:
          {{ article.user.name }}
        </div>
      </div>
        </div>
        <div class="col-lg-4">
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
import Login from "../../components/widgets/Login.vue";
import Profile from "../../components/widgets/Profile.vue";
import Info from "../../components/widgets/Info.vue";
import Aqi from "../../components/widgets/Aqi.vue";
import Ads from "../../components/widgets/Ads.vue";
import axios from "axios";

export default {
    components: {
    Login,
    Profile,
    Ads,
    Aqi,
    Info
  },
  data() {
    return {
      article: {},
    };
  },
  mounted() {
    axios({
      method: "get",
      url: "https://api.cegrani.mk/api/articles/" + this.$route.params.slug,
    }).then((response) => {
      console.log(response.data[0].text)
      this.article = response.data[0];
    });
  },
};
</script>

<style></style>
