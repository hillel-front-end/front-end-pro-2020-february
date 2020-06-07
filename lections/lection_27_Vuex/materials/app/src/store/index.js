import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foo: 123,
    login: ''
  },
  mutations: {
    changeFoo(state, value) {
      state.foo = value;
    },
    changeLogin(state, payload) {
      state.login = payload;
    }
  },
  actions: {
  }
})
