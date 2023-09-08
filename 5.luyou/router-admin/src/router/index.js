import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import User from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Setting from '@/components/menus/MySettings.vue'

import Detail from '@/components/user/MyUserDetail.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/home',
    component: Home,
    redirect: '/home/user',
    children: [{
        path: 'user',
        component: User
      },
      {
        path: 'rights',
        component: Rights
      },
      {
        path: 'goods',
        component: Goods
      },
      {
        path: 'orders',
        component: Orders
      },
      {
        path: 'setting',
        component: Setting
      },
      {
        path: 'detail/:id',
        component: Detail
      }
    ]
  }]
})

router.beforeEach(function (to, from, next) {
  if (to.path === '/home') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router