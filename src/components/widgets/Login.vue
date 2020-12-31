<template>
  <div>
    <div class="card">
      <div class="card-header">Lajmerohu</div>
      <div class="card-body">
        <div>
          <div class="mb-2" v-if="errors.length" >
            <li class="alert alert-danger" v-for="error in errors" :key="error.index"> {{error}} </li>
          </div>
          <form @submit="checkForm">
          <b-form-group id="input-group-1" label-for="input-1">
            <b-form-input
              v-model="form.email"
              type="email"
              required
              placeholder="E-maili Juaj"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              v-model="form.password"
              type="password"
              required
              placeholder="Fjalkalimi Juaj"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit"  class="mr-2" variant="success"
            >Lajmerohu</b-button
          >

          <!-- @click="onSubmit()" -->
          <router-link to="/register">
            <b-button variant="primary">Regjistrohu</b-button>
          </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      form: {
        email: "",
        password: ""
      }
    };
  },
  watch:{
    form: {
     handler(){
       this.errors = [];
     },
     deep: true
  }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("currentUser/login", {
          email: this.form.email,
          password: this.form.password
        })
        // eslint-disable-next-line
        .then(response => {
          this.$router.push({ name: "Home" });
          this.$store.dispatch("currentUser/checkAccessToken");
          this.$store.dispatch("currentUser/getUser");
        })
        .catch(error => {
          if(error.response.status === 401) {
            this.errors.push('Emaili ose Fjalkalimi nuk perputhen')
          } 
        });
    },
    checkForm: function (e) {
      if (this.form.email && this.form.password) {
        this.onSubmit()
      }

      this.errors = [];

      if (!this.form.email) {
        this.errors.push('Ju Lutem Plotsoni Emailin.');
      }
      if (!this.form.password) {
        this.errors.push('Ju Lutem Plotsoni Passwordin.');
      }

      e.preventDefault();
    }
  }
};
</script>

<style></style>
