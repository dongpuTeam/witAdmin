import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import login from '@/views/login.vue'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode:'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'index',
      component: index,
      meta: {
        title: "首页",
      }
    },
    {
      path: '/home',
      name: 'home',
      component(resolve) {
        require(['@/views/home'], resolve)
      },
      meta: {
        title: "应用中心",
      }
    },
    {
      path: '/addApp',
      name: 'addApp',
      component(resolve) {
        require(['@/views/addApp'], resolve)
      },
      meta: {
        title: "应用中心",
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: "登录",
      }
    },
    // 用户管理
    {
      path: '/userright/:id',
      component(resolve) {
        require(['@/views/userright/index'], resolve)
      },
      children: [
        {
          path: '',
          name: 'userlist',
          component(resolve) {
            require(['@/views/userright/userlist'], resolve)
          }
        },
        {
          path: 'organize',
          name: 'organize',
          component(resolve) {
            require(['@/views/userright/organize'], resolve)
          }
        },
        {
          path: 'rollset',
          name: 'rollset',
          component(resolve) {
            require(['@/views/userright/rollset'], resolve)
          }
        }
      ]
    },
    // 权限管理
    {
      path: '/limits/:id',
      component(resolve) {
        require(['@/views/limits/index'], resolve)
      },
      children: [
        {
          path: '',
          name: 'limitsAdmin',
          component(resolve) {
            require(['@/views/limits/admin'], resolve)
          }
        }
      ]
    },
    {
      path: '/schedule/:id',
      component(resolve) {
        require(['@/views/schedule/index'], resolve)
      },
      children:[
        {
          path: '',
          name: 'issues',
          component(resolve) {
            require(['@/views/schedule/issues/index'], resolve)
          }
        },
        {
          path:'lead',
          name:'lead',
          component(resolve){
            require(['@/views/schedule/lead/index'],resolve)
          }
        },
        {//领导行程--新建行程
          path: 'createSleadchedule',
          name: 'createSchedule',
          component(resolve) {
            require(['@/views/schedule/lead/create'], resolve)
          }
        },
        {
          path: 'anual',
          name:'anual',
          component(resolve) {
            require(['@/views/schedule/anual/index'], resolve)
          }
        },
        {
          path: 'role',
          name: 'role',
          component(resolve) {
            require(['@/views/schedule/role/index'], resolve)
          }
        },
        {
          path: 'approval',
          name: 'approval',
          component(resolve) {
            require(['@/views/schedule/approval/index'], resolve)
          }
        },
        {
          path: 'form',
          name: 'form',
          component(resolve) {
            require(['@/views/schedule/form/index'], resolve)
          }
        },

       
      ]
    },
    
  ]
})

