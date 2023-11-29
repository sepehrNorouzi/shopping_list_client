import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: null,
    user: null,
    userRefresh: null,
  },
  getters: {
    getUserToken(state) {
      return state.userToken;
    },
    getUserRefresh(state) {
      return state.userRefresh;
    },
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUserTokens(state, token) {
      state.userToken = token.access,
      state.userRefresh = token.refresh
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    loginUser({ commit }, data) {
      commit('setUserTokens', data.tokens)
      commit('setUser', {
        username: data.username
      })
    },

    logoutUser({ commit }) {
      commit('setUserTokens', {access: null, refresh: null})
      commit('setUser', null)
    }
  },
  modules: {

  }
})
