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
    name:'home',
    component: Home,
  },
  {
    path: '/user',
    name:'user',
    component: User,
  },
  {
    path: '/mall',
    name:'mall',
    component: Mall,
  },
  {
    path: '/log',
    name:'log',
    component: Log,
  },
  {
    path: '/page1',
    name:'page1',
    component: PageOne,
  },
  {
    path: '/page2',
    name:'page2',
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
