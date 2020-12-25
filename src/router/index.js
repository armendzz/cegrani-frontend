import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import ResetPass from "../views/auth/ResetPass.vue";
import Profile from "../views/Profile.vue";
import ImageUpload from "../components/MultipleImageUpload.vue";
import Mail from "../views/Mail.vue";
import Page404 from "../views/404.vue";
import AdminDashboard from "../views/admin/Dashboard.vue";
import AdminCategory from "../views/admin/Category.vue";
import Admin from "../views/admin/Admin.vue";
import Admin404 from "../views/admin/Admin404.vue";
import store from "../store";
import CreateArticle from '../views/articles/CreateArticle.vue';
import AdminArticles from '../views/admin/Articles.vue';
import ShowArticle from '../views/articles/Show.vue';

Vue.use(VueRouter);
let isLogged = new Boolean();

function guardMyroute(to, from, next) {
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

function guardAdminRoute(to, from, next) {
  if (isLogged && store.getters["currentUser/isAdmin"] == 1) {
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
    path: "/imageupload",
    name: "ImageUpload",
    beforeEnter: guardMyroute,
    component: ImageUpload
  },
  {
    path: "/mail",
    name: "Mail",
    component: Mail
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
  },

  {
    path: "/admin",
    name: "Admin",
    beforeEnter: guardAdminRoute,
    meta: {
      layout: "admin"
    },
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "category",
        name: "AdminCategory",
        meta: {
          layout: "admin"
        },
        component: AdminCategory
      },
      {
        path: "dashboard",
        name: "AdminDashboard",
        meta: {
          layout: "admin"
        },
        component: AdminDashboard
      },
      {
        path: "articles",
        name: "AdminArticles",
        meta: {
          layout: "admin"
        },
        component: AdminArticles
      },
      {
        path: "*",
        name: "Admin404",
        meta: {
          layout: "admin"
        },
        component: Admin404
      }
    ]
  },
  {
    path: "/article/create",
    beforeEnter: guardMyroute,
    name: "CreateArticle",
    component: CreateArticle
  },
  {
    path: "/article/:slug",
    name: "ShowArticle",
    component: ShowArticle
  },
  {
    path: "*",
    name: "Page404",
    component: Page404
  }
];

const router = new VueRouter({
  routes
});

export default router;
