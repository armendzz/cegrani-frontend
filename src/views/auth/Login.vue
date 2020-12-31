<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">Lajmerohu</div>
            <div class="card-body">
                <div class="mb-2" v-if="errors.length" >
            <li class="alert alert-danger" v-for="error in errors" :key="error.index"> {{error}} </li>
          </div>
                <form @submit="checkForm">
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text"><i class="fas fa-at"></i></div>
                </div>
               
                <input
                  type="email"
                  v-model="form.email"
                  class="form-control"
                  placeholder="E-maili juaj"
                  required
                />
              </div>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text"><i class="fas fa-key"></i></div>
                </div>
                <input
                  type="password"
                  v-model="form.password"
                  class="form-control"
                  placeholder="FjaleKalimi Juaj"
                  required

                />
              </div>
              <div class="d-flex mt-4 justify-content-between">
                <button type="submit" class="btn btn-primary mt-2">
                  Lajmerohu
                </button>
                <span>Ose</span>
                <router-link to="/register">
                  <button class="btn btn-success mt-2">
                    Regjistrohu
                  </button></router-link
                >
              </div>
              </form>
              <hr />
              <div>
                <router-link to="/resetpass">
                  <span class="reset-pass"
                    >Keni Haruar FjaleKalimin? Kliko Ketu</span
                  ></router-link
                >
              </div>
            </div>
          </div>
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
    login() {
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
        this.login()
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

<style scoped>
.reset-pass {
  color: darkgrey;
  font-size: 1rem;
}
</style>
