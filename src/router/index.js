import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../../src/components/Hello'
import List from '../../src/components/List';
import Tree from '@/components/tree';

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
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    }
  ]
})
