<template>
  <div>
    <div class="container">
      <div class="card mx-2 my-4">
        <div class="card-header">Shto nje artikull</div>
        <div class="card-body">
          <input
            class="form-control form-control-lg mb-2"
            type="text"
            v-model="title"
            placeholder="Titulli i artikullit"
          />
          <wysiwyg v-model="editorContent" />

          <div class="form-row mt-2 align-items-center">
            <div class="col-auto my-1">
              <label class="mr-sm-2" for="inlineFormCustomSelect"
                >Zgjidh Kategorine</label
              >
              <select
                @change="onChange($event)"
                class="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
                required
              >
                <option
                  :value="category.id"
                  v-for="(category, i) in this.$store.state.category.category"
                  :key="i"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>

            <div class="col-auto my-1 mr-2">
              <label class="mr-sm-2 mt-3" for="inlineFormCustomSelect"
                >Vendos nje fotografi (opsionale)</label
              >
              <div class="input-group mb-3">
                <div class="custom-file">
                  <input
                    type="file"
                    id="file"
                    ref="file"
                    v-on:change="onChangeFileUpload()"
                    class="custom-file-input"
                  />
                  <label class="custom-file-label" for="inputGroupFile01"
                    >Zgjidhe fotografin</label
                  >
                </div>
              </div>
            </div>
            <div class="ml-2 col-auto my-1">
              <label class="mr-sm-2" for="inlineFormCustomSelect"
                >Pershendetje:
                {{ this.$store.state.currentUser.user.name }}</label
              >
              <br />
              <span class="font-italic"
                >Ju mbani përgjegjësi te plote per ate cfar publikoni, <br />
                emri juaj do te shfaqet si autori i keti artikulli.</span
              >
            </div>
          </div>
          <hr />
          <button class="btn btn-lg btn-success" @click="addArticle">
            Shto Artikullin
          </button>
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
      editorContent: "",
      title: "",
      file: "",
      category: "4",
    };
  },
  methods: {
    addArticle() {
      const bodyFormData = new FormData();
      bodyFormData.append("text", this.editorContent);
      bodyFormData.append("title", this.title);
      bodyFormData.append("category_id", this.category);
      bodyFormData.append("file", this.file);
      axios({
        method: "post",
        url: "https://api.cegrani.mk/api/articles",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          console.log(response.data);
          this.newCategory = "";
        })
        .catch((e) => {
          console.log("ERRRR:: ", e.response.data);
        });
    },
    onChange(event) {
      this.category = event.target.value;
    },
    onChangeFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
.editr {
  min-height: 500px !important;
}
</style>
