import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '../views/TodoList.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    alias: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todolist',
    name: 'Todo List',
    component: TodoList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
