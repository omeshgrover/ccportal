import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import(/* webpackChunkName: "cards" */ '../views/Cards.vue')
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import(/* webpackChunkName: "cards" */ '../views/Payments.vue')
  },
  {
    path: '/credit',
    name: 'credit',
    component: () => import(/* webpackChunkName: "cards" */ '../views/Credit.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "cards" */ '../views/Settings.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
