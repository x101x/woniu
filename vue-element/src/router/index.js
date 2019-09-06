import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import UserManage from '@/components/content/UserManage'
import Table from '@/components/content/Table'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/main/User-manage',
        name: 'UserManage',
        component: UserManage
      },
      {
        path: '/main/table',
        name: 'Table',
        component: Table
      }
    ]
  }]
})
