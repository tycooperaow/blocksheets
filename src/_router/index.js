import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Docs from '../views/Docs.vue'
import About from '../views/About.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/app',
    name: 'Main',
    component: Main
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
