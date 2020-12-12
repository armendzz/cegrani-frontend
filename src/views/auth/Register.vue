<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">Regjistrohu</div>
            <div class="card-body">
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fas fa-user-alt"></i>
                  </div>
                </div>
                <input
                  type="text"
                  v-model="user.name"
                  class="form-control"
                  placeholder="Emri dhe Mbiemri Juaj"
                />
              </div>
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
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text"><i class="fas fa-key"></i></div>
                </div>
                <input
                  type="password"
                  v-model="user.password_confirmation"
                  class="form-control"
                  placeholder="Ju Lutem Perseriteni FjaleKalimin Tuaj"
                />
              </div>
              <div class="d-flex mt-4 justify-content-between">
                <button class="btn btn-success mt-2" @click="register()">
                  Regjistrohu
                </button>
              </div>
              <hr />
              <div>
                <router-link to="/login">
                  <span class="login">Jam i regjistruar</span></router-link
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
// TODO
// verifikim te formes para dergeses,
// ne backend kthe access_tokken pas regjistrimit,
// kap errorat
import axios from "axios";

export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    register() {
      axios
        .post(`https://api.cegrani.mk/api/auth/signup`, {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          password_confirmation: this.user.password_confirmation
        })
        .then(response => {
          if (response.data.message === "Successfully created user!") {
            this.$router.push("login");
          }
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>

<style scoped>
.login {
  color: darkgrey;
  font-size: 1.2rem;
}
</style>
