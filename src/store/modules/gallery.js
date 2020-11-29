import axios from "axios";

const state = {
 images: [],
};
const getters = {
 // 10 fotot e fundit, per home page
  lastTenImg: state => {
    return state.images.slice(0, 10);
  }
};
const actions = {
  getGallery({ commit }) {
    axios.get("http://localhost:8000/api/gallery").then(response => {
        commit("setGallery", response.data);
      });
  },
};
const mutations = {
  setGallery(state, data) {
    state.images = data;
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
