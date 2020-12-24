<template>
  <div>
    <div class="container">
      <div class="card mx-2 my-4">
        <div class="card-header">Shto nje artikull</div>
        <div class="card-body">
          <input
            class="form-control form-control-lg mb-2"
            type="text"
            placeholder="Titulli i artikullit"
          />
<wysiwyg v-model="myHTML" />

          <div class="form-row mt-2 align-items-center">
            <div class="col-auto my-1">
              <label class="mr-sm-2" for="inlineFormCustomSelect"
                >Zgjidh Kategorine</label
              >
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-auto my-1">
              <label class="mr-sm-2 mt-3" for="inlineFormCustomSelect"
                >Vendos nje fotografi (opsionale)</label
              >
              <div class="input-group mb-3">
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="inputGroupFile01"
                  />
                  <label class="custom-file-label" for="inputGroupFile01"
                    >Zgjidhe fotografin</label
                  >
                </div>
              </div>
            </div>
          </div>
          <hr />
          <button class="btn btn-lg btn-success">Shto Artikullin</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
 

  data() {
    return {
      editorContent: 'Initial Content'
    }
  },
   methods: {
     
  }
};
</script>

<style>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";

</style>
