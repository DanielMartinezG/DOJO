import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Users from '@/components/Users'
import Prueba from '@/components/Prueba'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/users',
    	name:'Users',
    	component: Users
    },
    {
    	path:'/prueba',
    	name:'Prueba',
    	component: Prueba
    },

  ]
})
