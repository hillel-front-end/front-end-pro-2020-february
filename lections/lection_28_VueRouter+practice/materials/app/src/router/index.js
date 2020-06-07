import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/', // http://localhost:8080/ ||  http://localhost:8080
    name: 'Home',
    component: Home
  },
  {
    path: '/about', // // http://localhost:8080/about
    name: 'About',
    component: About
  },
  {
    path: '/cotacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '*',
    name: 'Not Found',
    // component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
