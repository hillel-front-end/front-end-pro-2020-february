import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import MainApp from '../views/MainApp.vue'
import NotFound from '../views/NotFound.vue'
import store from '@/store/index'

console.log(store, 'store');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/home',
    name: 'Home',
    component: MainApp,
    beforeEnter(from, to, next) {
      stopRoute(next);
    }
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  }
];

function stopRoute(next) {
  if (store.state.isAuth) {
    next();
  } else {
    router.push('/');
  }
}



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
