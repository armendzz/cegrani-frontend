<template>
  <div>
    <div class="mt-2">
      <div class="container">
        <div class="row justify-content-center">
          <h1 class="titlefont">Galeria</h1>
        </div>
        <div class="row justify-content-center">
          <div
            v-for="(image, i) in images"
            :key="i"
            class="image col-md-2 col-4"
          >
            <img class="img" :src="image" @click="index = i" />
          </div>
          <vue-gallery-slideshow
            :images="images"
            :index="index"
            @close="index = null"
          ></vue-gallery-slideshow>
        </div>
        <div class="row justify-content-center">
          <h5 class="titlefont">Shiko Galerien e Plote</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import VueGallerySlideshow from "vue-gallery-slideshow";
export default {
  components: {
    VueGallerySlideshow
  },
  data() {
    return {
      images: [
        "https://placekitten.com/801/800",
        "https://placekitten.com/802/800",
        "https://placekitten.com/803/800",
        "https://placekitten.com/804/900",
        "https://placekitten.com/805/800",
        "https://placekitten.com/806/800",
        "https://placekitten.com/807/800",
        "https://placekitten.com/808/800",
        "https://placekitten.com/809/800",
        "https://placekitten.com/810/800"
      ],
      index: null
    };
  }
};
</script>

<style>
.image {
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  padding: 0, 0;

  object-fit: contain;
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.img {
  height: 100%;
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
}
</style>
