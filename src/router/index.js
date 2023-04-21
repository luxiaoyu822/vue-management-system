import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import User from '@/views/User'
import Mall from '@/views/Mall'
import Log from '@/views/Log'
import PageOne from '@/views/PageOne'
import PageTwo from '@/views/PageTwo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/mall',
    component: Mall,
  },
  {
    path: '/log',
    component: Log,
  },
  {
    path: '/page1',
    component: PageOne,
  },
  {
    path: '/page2',
    component: PageTwo,
  },
  {
    path: '/*',
    redirect: '/home',
  },
]

const router = new VueRouter({
  routes,
})

export default router
