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
          <div class="input-group-text"><i class="fas fa-user-alt"></i></div>
        </div>
        <input type="text" class="form-control" placeholder="Emri dhe Mbiemri Juaj">
      </div>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fas fa-at"></i></div>
        </div>
        <input type="email" class="form-control" placeholder="E-maili juaj">
      </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fas fa-key"></i></div>
        </div>
        <input type="password" class="form-control" placeholder="FjaleKalimi Juaj">
      </div>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fas fa-key"></i></div>
        </div>
        <input type="password" class="form-control" placeholder="Ju Lutem Perseriteni FjaleKalimin Tuaj">
      </div>
      <div class="d-flex mt-4 justify-content-between">
   
     
      <button class="btn btn-success mt-2">Regjistrohu</button>
      </div>
      <hr>
      <div>
           <router-link to="/login">
      <span class="login">Jam i regjistruar</span></router-link>
      </div>
           </div>
           
       </div>
       </div>
       </div>
      
   </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login {
    color: darkgrey;
    font-size: 1.2rem;
}

</style>
