<template>
  <div class="container">
    <div class="my-4 row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Shto Fotografi tek galleri</div>
          <div class="card-body">
            Ju mund te vendosni me shume fotografi pernjeher, selektoni dhe reshqitni fotografite ketu.
            <vue-dropzone
              ref="myVueDropzone"
              id="dropzone"
              :options="dropzoneOptions"
            ></vue-dropzone>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      dropzoneOptions: {
        url: "https://api.cegrani.mk/api/gallery",
        thumbnailWidth: 150,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user_access_token")
        }
      }
    };
  },
  mounted() {
   
  }
};
</script>
