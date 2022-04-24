import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loginModal: false,
        registerModal: false,
        loginToken: null,
        products: null
      },
      mutations: {
        loginModalState(state, loginModal) {
          state.loginModal = loginModal
        },
        registerModalState(state, registerModal) {
          state.registerModal = registerModal
        },
        loginTokenState(state, loginToken) {
          state.loginToken = loginToken
        },
        productsStoredState(state, products) {
          state.products = products
        }
      },
      actions: {
        commitLoginModalState({ commit }) {
          console.log('statecommit');
        },
        commitGetProducts({ commit,state },data) {
          commit('productsStoredState',data);
        }
      },
      getters: {
        loginModal: state => state.loginModal,
        registerModal: state => state.registerModal,
        loginToken: state => state.loginToken,
        products: state => state.products
      },
      plugins: [createPersistedState()],
})