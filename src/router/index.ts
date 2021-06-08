import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Pagenot from '../views/PageNotFound.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: Pagenot
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
