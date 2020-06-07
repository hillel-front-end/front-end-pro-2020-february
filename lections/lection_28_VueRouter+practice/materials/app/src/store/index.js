import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foo: 123,
    login: '',
    isDisabled: false
  },
  mutations: {
    changeFoo(state, value) {
      state.foo = value;
    },
    changeLogin(state, payload) {
      state.login = payload;
    },
    changeIsDisabled(state, payload) {
      state.isDisabled = payload;
    }
  },
  getters: {
    getIsDisabled(state) {
      return state.isDisabled;
    },
    getFoo(state) {
      return state.foo;
    }
  },
  actions: {
    asyncChangeFoo({commit, state}, payload) {
      commit('changeIsDisabled', true);

      setTimeout((res)=> {
        console.log('changed',  payload);
        commit('changeFoo', payload);
        commit('changeIsDisabled', false);
      }, 3000);
    }
  }
})
