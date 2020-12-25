import axios from "axios";

const state = {
  articles: []
};
const getters = {
  // 10 fotot e fundit, per home page
};
const actions = {
  getArticles({ commit }) {
    axios.get("https://api.cegrani.mk/api/articles").then(response => {
      commit("setArticles", response.data);
    });
  }
};
const mutations = {
  setArticles(state, data) {
    state.articles = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
