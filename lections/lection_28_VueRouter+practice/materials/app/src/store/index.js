import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isAuth: false,
    },
    mutations: {
        setIsAuth(state, payload) {
            state.isAuth = payload;
        }
    },
    getters: {
        'GET_IS_AUTH'({isAuth}) {
            return isAuth;
        },
    },
    actions: {
        async asyncGetAuthFromApi({commit}, payload) {
            const response = await fetch('http://localhost:3003/auth');
            const data = await response.json();

            commit('setIsAuth', data.success);
        }
    },
    modules: {

    }
})
