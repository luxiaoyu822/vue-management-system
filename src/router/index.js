import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import User from '@/views/User'
import Mall from '@/views/Mall'
import Log from '@/views/Log'
import PageOne from '@/views/PageOne'
import PageTwo from '@/views/PageTwo'
import Main from '@/views/Main'
import Login from '@/views/Login'
import Cookie from 'js-cookie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
      },
      {
        path: 'user',
        name: 'user',
        component: User,
        meta: {
          isAdmin: true,
        },
      },
      {
        path: 'mall',
        name: 'mall',
        component: Mall,
      },
      {
        path: 'log',
        name: 'log',
        component: Log,
        meta: {
          isAdmin: true,
        },
      },
      {
        path: 'page1',
        name: 'page1',
        component: PageOne,
        meta: {
          isAdmin: true,
        },
      },
      {
        path: 'page2',
        name: 'page2',
        component: PageTwo,
        meta: {
          isAdmin: true,
        },
      },
      {
        path: '/',
        redirect: '/home',
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    component: () => import('@/views/403'),
  },
  {
    path: '/*',
    redirect: '/',
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAdmin) {
    const whichRole = Cookie.get('role')
    if (whichRole && whichRole !== 'administrator') {
      next('/forbidden')
    } else {
      next()
    }
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  // 判断token是否存在
  const isToken = Cookie.get('token')
  //  token不存在时跳转到登录页(且跳转页面不是登录页)
  if (!isToken && to.name !== 'login') {
    next({
      name: 'login',
    })
    //token如果存在，且跳转页面是登录页，定位到首页
  } else if (isToken && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
