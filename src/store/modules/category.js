import axios from "axios";

const state = {
  category: []
};
const getters = {
  // 10 fotot e fundit, per home page
};
const actions = {
  getCategory({ commit }) {
    axios.get("https://api.cegrani.mk/api/category").then(response => {
      commit("setCategory", response.data);
    });
  }
};
const mutations = {
  setCategory(state, data) {
    state.category = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
