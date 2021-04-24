import Vue from "vue";
import Vuex from "vuex";
import filmState from "./modules/filmState"
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    filmState
  }
});
