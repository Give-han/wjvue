import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isAuth: false
}

const mutations = {
  auth (state) {
    state.isAuth = true
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
