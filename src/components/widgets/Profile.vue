<template>
  <div>
    <div class="card">
      <div class="card-header">Profili</div>
      <img
        class="card-img-top img mt-2"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        alt="Card image cap"
      />

      <div class="card-body">
        <h5 class="card-title">
          {{ this.$store.state.currentUser.user.name }}
        </h5>
      </div>
      <ul class="list-group list-group-flush">
        <router-link to="/article/create">
          <li class="list-group-item">
            <i class="fas fa-plus"></i> Posto Artikull (ne perpunim)
          </li></router-link>
        <router-link to="/imageupload">
          <li class="list-group-item">
            <i class="fas fa-upload"></i> Ngarko Fotografi
          </li>
        </router-link>
        <a href="">
          <li class="list-group-item">
            <i class="fas fa-cloud-upload-alt"></i> Ngarko Video - (ne perpunim)
          </li></a
        >
        <a href="">
          <li class="list-group-item">
            <i class="far fa-edit"></i> Redakto Postimet - (ne perpunim)
          </li></a
        >
      </ul>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-12 mb-1 col-lg-6">
            <router-link to="/profile">
              <button class="btn btn-primary sm-mb-2">Profili Im</button>
            </router-link>
          </div>

          <div class="col-sm-12 mb-1 col-lg-6">
            <button class="btn btn-danger" @click="logout()">C'Lajmrohu</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("currentUser/logout");
    }
  }
};
</script>

<style scoped>
.card-img-top {
  border-radius: 50%;
  height: 200px;
  padding: 0 20% 0 20%;
}
.list-group-item {
  border-left: 3px solid #046b9b !important;
  color: black;
}

.list-group-item:hover {
  border-left: 6px solid #046b9b !important;
  font-weight: bold;
}
</style>
