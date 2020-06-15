import Vue from 'vue'
import Vuex from 'vuex'
import helpers  from '@/helpers/';
import products from "./modules/products";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isAuth: false,
        registrationModalVisibility: false,
        userInfo: {}
    },
    mutations: {
        setIsAuth(state, payload) {
            state.isAuth = payload;
        },
        'SET_REGISTRATION_MODAL_VISIBILITY'(state, payload) {
            state.registrationModalVisibility = payload;
        },
        'SET_USER_INFO'(state, payload) {
            state.userInfo = payload
        }
    },
    getters: {
        'GET_IS_AUTH'({isAuth}) {
            return isAuth;
        },
        'GET_REGISTRATION_MODAL_VISIBILITY'({registrationModalVisibility}) {
            return registrationModalVisibility;
        },
        'GET_USER_NAME'({userInfo}) {
            return userInfo.name;
        },
        'GET_USER_ID'({userInfo}) {
            return userInfo.id;
        }
    },
    actions: {
        async asyncGetAuthFromApi({commit}, payload) {
            const response = await helpers.sandPostAjax('http://localhost:3003/auth', payload);

            commit('setIsAuth', response.success);
            commit('SET_USER_INFO', response.userInfo || {});
        },
        async asyncRegistrationNewUser({commit}, payload) {//
            const response = await helpers.sandPostAjax('http://localhost:3003/add-user', payload);

            if(response.res == 'ok') {
                commit('SET_REGISTRATION_MODAL_VISIBILITY', false);
            }


        }
    },
    modules: {
        products
    }
})
