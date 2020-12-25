import axios from "axios";

const state = {
  articles: []
};
const getters = {
  lastFourArticles: state => {
    return state.articles.slice(0, 4);
  }
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
