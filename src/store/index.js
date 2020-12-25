import Vue from "vue";
import Vuex from "vuex";
import currentUser from "./modules/currentUser";
import othersData from "./modules/othersData";
import gallery from "./modules/gallery";
import category from "./modules/category";
import articles from './modules/articles';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { currentUser, othersData, gallery, category, articles }
});
