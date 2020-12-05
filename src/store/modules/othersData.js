// eslint-disable-next-line
import axios from "axios";

const state = {
  airQuality: null,
  weather: {}
};
const getters = {
  // eslint-disable-next-line
  air: state => {
    return state.airQuality;
  },
  sot: state => {
    return state.weather["sot"];
  },
  ora: state => {
    return state.weather["temora"];
  },
  ditet: state => {
    return state.weather["res"];
  }
};
const actions = {
  getAir({ commit }) {
    axios.get("http://localhost:8000/api/others/ajri").then(response => {
      commit("setAir", response.data);
    });
  },
  getWeather({ commit }) {
    axios.get("http://localhost:8000/api/others/weather").then(response => {
      commit("setWeather", response.data);
    });
  }
};
const mutations = {
  setAir(state, data) {
    state.airQuality = data;
  },

  setWeather(state, data) {
    state.weather = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
