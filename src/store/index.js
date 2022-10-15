import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const Store = new Vuex.Store({
  state: {
    datas: [],
  },
  actions: {
    GET_DATAS_FROM_API({ commit }) {
      return axios("http://localhost:3000/datas", {
        method: "GET",
      }).then((response) => {
        commit("SET_DATAS_TO_VUEX", response.data);
      });
    },
  },
  mutations: {
    SET_DATAS_TO_VUEX: (state, datas) => {
      state.datas = datas;
    },
  },
  getters: {
    DATAS(state) {
      return state.datas;
    },
  },
});

export default Store;
