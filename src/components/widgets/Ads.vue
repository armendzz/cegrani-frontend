<template>
  <div>
    <div class="card">
      <div class="card-header">Reklama Lokale</div>
      <div class="card-body">
        <Slider
          ref="Slider"
          direction="horizontal"
          :mousewheel-control="true"
          :performance-mode="true"
          :pagination-visible="true"
          :pagination-clickable="true"
          :loop="true"
          :auto="true"
          :speed="500"
          @slide-change-start="onSlideChangeStart"
          @slide-change-end="onSlideChangeEnd"
        >
          <div>Page 1</div>
          <div>Page 1</div>
          <div>Page 1</div>
          <div>Page 1</div>
          <div>Page 1</div>
          <div>Page 1</div>
          <div>Page 2</div>
          <div>Page 3</div>
        </Slider>
        Vendos Reklamen Tuaj Ketu
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "vue-plain-slider";

export default {
  components: { Slider },
  methods: {
    // eslint-disable-next-line
    onSlideChangeStart(currentPage, el) {
      // console.log("onSlideChangeStart", currentPage, el);
    },
    // eslint-disable-next-line
    onSlideChangeEnd(currentPage, el) {
      //  console.log("onSlideChangeEnd", currentPage, el);
    }
  }
};
</script>

<style>
.slider {
  height: 300px;
}
</style>
