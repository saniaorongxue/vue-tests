import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../../src/components/Hello'
import List from '../../src/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/to-do',
      name: 'ToDo',
      component: List
    },
  ]
})
