<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">Lajmerohu</div>
            <div class="card-body">
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text"><i class="fas fa-at"></i></div>
                </div>
                <input
                  type="email"
                  v-model="user.email"
                  class="form-control"
                  placeholder="E-maili juaj"
                />
              </div>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text"><i class="fas fa-key"></i></div>
                </div>
                <input
                  type="password"
                  v-model="user.password"
                  class="form-control"
                  placeholder="FjaleKalimi Juaj"
                />
              </div>
              <div class="d-flex mt-4 justify-content-between">
                <button class="btn btn-primary mt-2" @click="login1()">
                  Lajmerohu
                </button>
                <span>Ose</span>
                <router-link to="/register">
                  <button class="btn btn-success mt-2">
                    Regjistrohu
                  </button></router-link
                >
              </div>
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
      user: {}
    };
  },
  methods: {
    login1() {
      this.$store
        .dispatch("currentUser/login", {
          email: this.user.email,
          password: this.user.password
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

<style scoped>
.reset-pass {
  color: darkgrey;
  font-size: 1rem;
}
</style>
