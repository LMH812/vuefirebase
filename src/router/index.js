import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import auth from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
    {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat.vue'),
    beforeEnter: (to, from, next) => {
      if (!firebase.auth().currentUser) {
        next('/')
      } else {
        next()
      }
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
