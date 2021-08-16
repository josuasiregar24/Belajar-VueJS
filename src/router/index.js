import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TShirt from '../views/T-Shirt.vue'
import TShirtDetail from '../views/T-ShirtDetail.vue'
import Cart from '../views/Cart.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tshirt',
    name: 'T-Shirt',
    component: TShirt
  },
  {
    path: '/tshirt/:id',
    name: 'T-ShirtDetail',
    component: TShirtDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
