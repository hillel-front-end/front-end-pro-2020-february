import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isAuth: false,
        registrationModalVisibility: true
    },
    mutations: {
        setIsAuth(state, payload) {
            state.isAuth = payload;
        },
        'SET_REGISTRATION_MODAL_VISIBILITY'(state, payload) {
            state.registrationModalVisibility = payload;
        }
    },
    getters: {
        'GET_IS_AUTH'({isAuth}) {
            return isAuth;
        },
        'GET_REGISTRATION_MODAL_VISIBILITY'({registrationModalVisibility}) {
            return registrationModalVisibility;
        }
    },
    actions: {
        async asyncGetAuthFromApi({commit}, payload) {
            const response = await fetch('http://localhost:3003/auth');
            const data = await response.json();

            commit('setIsAuth', data.success);
        },
        async asyncRegistrationNewUser({commit}, payload) {// payload = this.requestValue
            const response = await fetch('http://localhost:3003/add-user',  {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if(data.res == 'ok') {
                commit('SET_REGISTRATION_MODAL_VISIBILITY', false);
            }


        }
    },
    modules: {

    }
})
