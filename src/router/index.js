import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import ResetPass from "../views/auth/ResetPass.vue";
import Profile from "../views/Profile.vue";
import Test from "../components/MultipleImageUpload.vue";
Vue.use(VueRouter);

function guardMyroute(to, from, next) {
  let isLogged = new Boolean();
  if (localStorage.getItem("user_access_token") === null) {
    isLogged = false;
  } else {
    isLogged = true;
  }

  if (isLogged) {
    next(); // allow to enter route
  } else {
    next("/login"); // go to '/login';
  }
}

function ifLoggedInPerventLoginandRegister(to, from, next) {
  let isLogged = new Boolean();
  if (localStorage.getItem("user_access_token") === null) {
    isLogged = false;
  } else {
    isLogged = true;
  }

  if (!isLogged) {
    next(); // allow to enter route
  } else {
    next("/"); // go to '/login';
  }
}

const routes = [
  {
    path: "/test",
    name: "Test",
    component: Test
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    beforeEnter: guardMyroute,
    component: Profile
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: ifLoggedInPerventLoginandRegister,
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    beforeEnter: ifLoggedInPerventLoginandRegister,
    component: Register
  },

  {
    path: "/resetpass",
    name: "ResetPass",
    component: ResetPass
  }
];

const router = new VueRouter({
  routes
});

export default router;
