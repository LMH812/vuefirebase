import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: null,
  },
  actions: {
    setUser({commit}, user) {
      commit('SET_USER', user)
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.userInfo = user
    }
  },
  getters: {
    // userInfo: this.state.userInfo,
    userInfo(state) {
      return state.userInfo
    }
  },
  modules: {
  }
})
