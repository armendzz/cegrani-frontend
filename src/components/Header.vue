<template>
  <div>
     <div class="container">
  <div class="top-bar">
   <span>{{ new Date() | moment("D MMMM YYYY") }} </span>
    <span> E-mail@Cegrani.mk </span>
     <span> Inbox </span>
    </div>
  </div>
    <b-container>
      <div class="mt-3 row">
        <div class="col-lg-5">
          <img src="@/assets/1.png" width="100%" alt="" />
        </div>
        <div class="col-md-7 d-none d-md-none d-lg-block">
          <div class="d-flex justify-content-end">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="E-maili Juaj"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  type="password"
                  required
                  placeholder="Fjalkalimi Juaj"
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" class="mr-2" variant="success"
                >Lajmerohu</b-button
              >
              <b-button type="reset" variant="primary">Regjistrohu</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </b-container>
    <b-navbar class="mt-3 " type="dark" id="menu" toggleable="lg">
      <b-container>
        <a href="#"
          ><span class="hvr-icon-pulse nav-link" id="homeButton"
            ><i class="fas fa-home hvr-icon"></i> Fillimi</span
          ></a
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse class="ml-2 " id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="hvr-icon-pulse " href="#"
              ><i class="far fa-newspaper hvr-icon"></i> Njoftime</b-nav-item
            >
            <b-nav-item class="hvr-icon-pulse" href="#"
              ><i class="far fa-futbol hvr-icon"></i> Kf Arsimi</b-nav-item
            >
            <b-nav-item class="hvr-icon-pulse" href="#"
              ><i class="fas fa-university hvr-icon"></i> B. Lokale</b-nav-item
            >
            <b-nav-item class="hvr-icon-pulse" href="#"
              ><i class="fas fa-globe-europe hvr-icon"></i> Historia</b-nav-item
            >
            <b-nav-item class="hvr-icon-pulse" href="#"
              ><i class="fas fa-photo-video hvr-icon"></i> Galeria</b-nav-item
            >
            <b-nav-item class="hvr-icon-pulse" href="#"
              ><i class="fas fa-photo-video hvr-icon"></i> Galeria</b-nav-item
            >
            <b-nav-item-dropdown class="">
              <template slot="button-content">
                <i class="fas fa-plus hvr-icon"></i> Me Shume</template
              >
              <b-dropdown-item class="hvr-icon-pulse" href="#"><i class="fas fa-graduation-cap hvr-icon"></i> Sh.F. Perparimi</b-dropdown-item>
              <b-dropdown-item class="hvr-icon-pulse" href="#"><i class="fas fa-fingerprint hvr-icon"></i> <span class="mr-1"></span>Personalitete</b-dropdown-item>
              <b-dropdown-item class="hvr-icon-pulse" href="#"><i class="fas fa-child hvr-icon"></i> <span class="mr-2"></span>SHKA Jahi Hasani</b-dropdown-item>
              <b-dropdown-item class="hvr-icon-pulse" href="#"><i class="fas fa-hand-holding-heart hvr-icon"></i> <span class="mr-1"></span>FH Cegrani-Zvicer</b-dropdown-item>
              <b-dropdown-item class="hvr-icon-pulse" href="#"><i class="fas fa-hand-holding-heart hvr-icon"></i> <span class="mr-1"></span>FH Cegrani-Austri</b-dropdown-item>
              <b-dropdown-item class="hvr-icon-pulse" href="#"><i class="fas fa-phone-alt hvr-icon"></i> <span class="mr-1"></span>Kontakt</b-dropdown-item>
              <b-dropdown-item class="hvr-icon-pulse" href="#"><i class="fas fa-info hvr-icon"></i> <span class="mr-3"></span>Reth Faqes</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
    
}
</script>

<style>
#homeButton {
  color: white !important;
  font-family: "Spectral", serif;
  font-size: 1.5rem;
}
#menu {
  background-color: #1291cd !important;
}

.dropdown-item {
    color: #1291cd !important;
  font-family: "Spectral", serif;
  font-size: 1.3rem;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.top-bar {
  background-color: #f8f9fa;
  border-bottom: 2px solid lightgrey;
  color: #212529;
  font-size: 1.2rem;
}
.dropdown-item:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: #1291cd;
  height: 3px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.dropdown-item:hover:before,
.dropdown-item:focus:before,
.dropdown-item:active:before {
  left: 0;
  right: 0;
}

@media only screen and (max-width: 1200px) {

 #menu .nav-link {
 
  font-size: 1.1rem !important;
 }

}

#menu .nav-link {
  color: white !important;
  font-family: "Spectral", serif;
    font-size: 1.3rem;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
#menu .nav-link:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: #ffffff;
  height: 3px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
#menu .nav-link:hover:before,
#menu .nav-link:focus:before,
#menu .nav-link:active:before {
  left: 0;
  right: 0;
}

@-webkit-keyframes hvr-icon-pulse {
  25% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  75% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
}
@keyframes hvr-icon-pulse {
  25% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  75% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
}
.hvr-icon-pulse {
  display: block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-icon-pulse .hvr-icon {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-icon-pulse:hover .hvr-icon,
.hvr-icon-pulse:focus .hvr-icon,
.hvr-icon-pulse:active .hvr-icon {
  -webkit-animation-name: hvr-icon-pulse;
  animation-name: hvr-icon-pulse;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

a {
  text-decoration: none !important;
}
</style>
