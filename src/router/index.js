import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/hello'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/image',
    name: 'image',
    component: () => import('@/views/image.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue')
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/views/index/hello.vue')

  }
]
const router = new Router({
  // mode: 'history', // require service support
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export default router
