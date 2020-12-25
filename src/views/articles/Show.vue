<template>
  <div>
    <div class="container">
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
  </div>
</template>

<script>
import axios from "axios";
export default {
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
      this.article = response.data[0];
    });
  },
};
</script>

<style></style>
