<template>
  <div class="my-2 mx-3">
    <div class="row mt-2">
      <div class="col-lg-2">
        <Siderbar />
      </div>
      <div class="col-lg-10">
        <div class="border">
          <AdminHeader />
        </div>
        <div class="content mt-2">
          <router-view />
        </div>
      </div>
    </div>
    <AdminFooter />
  </div>
</template>

<script>
import AdminHeader from "../admin/AdminHeader.vue";
import AdminFooter from "../admin/AdminFooter.vue";
import Siderbar from "../admin/Siderbar.vue";
export default {
  components: {
    AdminHeader,
    AdminFooter,
    Siderbar
  }
};
</script>

<style></style>
