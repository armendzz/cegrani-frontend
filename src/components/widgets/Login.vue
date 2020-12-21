<template>
  <div>
    <div class="card">
      <div class="card-header">Lajmerohu</div>
      <div class="card-body">
        <div>
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
          <b-button @click="onSubmit()" class="mr-2" variant="success"
            >Lajmerohu</b-button
          >
          <router-link to="/register">
            <b-button variant="primary">Regjistrohu</b-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
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
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
