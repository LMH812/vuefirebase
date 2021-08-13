import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: null,
    currentChannel: null,
    isPrivate: false
  },
  actions: {
    setUser({commit}, user) {
      commit('SET_USER', user)
    },
    setCurrentChannel({commit},channel) {
      commit('SET_CURRENT_CHANNEL', channel)
    },
    setPrivate({commit}, isPrivate) {
      commit('SET_PRIVATE', isPrivate)
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.userInfo = user
    },
    SET_CURRENT_CHANNEL(state,channel) {
      // console.log(channel);
      state.currentChannel = channel
    },
    SET_PRIVATE(state, isPrivate) {
      state.isPrivate = isPrivate
    }
  },
  getters: {
    // userInfo: this.state.userInfo,
    userInfo(state) {
      return state.userInfo
    },
    currentChannel(state) {
      // console.log(state.currentChannel);
      return state.currentChannel
    },
    isPrivate(state) {
      return state.isPrivate
    },
  },
  modules: {
  }
})
