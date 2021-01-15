import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
  plugins: [createPersistedState({})],
  state,
  mutations,
  actions,
  getters
});
