<template>
  <div>
    <div class="card">
      <div class="card-header">Categories</div>
      <div class="card-body">
        <div
          v-for="(category, i) in this.$store.state.category.category"
          :key="i"
          class="mt-2 mb-2 border border-right-0 border-top-0 border-secondary"
        >
          <div class="row">
            <div class="col-md-8 ml-2 mb-2">
              <span id="cat-name"> {{ category.name }} </span> :
              <span> {{ category.articles.length }} </span>
            </div>
            <div class="col-md-3 mb-2 d-flex justify-content-between">
              <button class="btn btn-warning">Edit</button>
              <button class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
        <hr />
        <div class="form">
          <div class="row">
            <div class="col-md-8">
              <input
                class="form-control form-control-lg"
                v-model="newCategory"
                type="text"
                placeholder="Shto Category"
              />
            </div>
            <div class="col-md-4 mt-2">
              <button class="btn btn-lg btn-success" @click="addCategory">
                Add Category
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">Some Information</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newCategory: ""
    };
  },
  methods: {
    addCategory() {
      axios
        .post(`https://api.cegrani.mk/api/category/`, {
          name: this.newCategory
        })
        .then(response => {
          console.log(response.data);
          this.newCategory = "";
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
#cat-name {
  font-size: 1.5rem;
}
</style>
