import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // isAuth: false
  token: ''
}

const mutations = {
  auth (state, token) {
    state.token = token
  }
}

const actions = {}

const modules = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
