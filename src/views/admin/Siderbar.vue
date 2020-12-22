<template>
  <div>
    <div class="card">
      <div class="card-header">
        <a
          href="https://cegrani.mk"
          style="color: white;"
          target="_blank"
          rel="noopener noreferrer"
          >Cegrani.Mk - Visit Site</a
        >
      </div>

      <div class="card-body">
        <ul class="list-group list-group-flush">
          <a href="">
            <li class="list-group-item">
              Articles
            </li></a
          >
          <router-link to="/admin/category">
            <li class="list-group-item">
              Category
            </li>
          </router-link>
          <a href="">
            <li class="list-group-item">
              Users
            </li></a
          >
          <a href="">
            <li class="list-group-item">
              Gallery
            </li></a
          >
          <a href="">
            <li class="list-group-item">
              Stats
            </li></a
          >
          <a href="">
            <li class="list-group-item">
              Email
            </li></a
          >
          <a href="">
            <li class="list-group-item">
              Comments
            </li></a
          >
          <a href="">
            <li class="list-group-item">
              Feedbacks
            </li></a
          >
          <a href="">
            <li class="list-group-item">
              Settings
            </li></a
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
