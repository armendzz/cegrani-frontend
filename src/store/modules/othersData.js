// eslint-disable-next-line
import axios from "axios";

const state = {
  airQuality: null,
};
const getters = {
  // eslint-disable-next-line
  air: state => {
    return state.airQuality;
  }
};
const actions = {
  getAir({ commit }) {
    axios.get("http://localhost:8000/api/others/ajri").then(response => {
      commit("setAir", response.data);
    });
  },

};
const mutations = {
  setAir(state, data) {
    state.airQuality = data;
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
