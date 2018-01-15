import Vue from 'vue'
import Router from 'vue-router'
import list from '@/views/demo/list'
import detail from '@/views/demo/detail'
import add from '@/views/demo/add'
import set from '@/views/demo/set'
import login from '@/views/demo/login'

Vue.use(Router)
export default new Router({
  routes: [
    //首页
    {
      path: '/',
      title: '首页',
      name: 'home',
      redirect: '/list'
    },
    //列表
    {
      path: '/list',
      title: '列表',
      name: 'list',
      component: list
    },
    //详情
    {
      path: '/detail',
      title: '详情',
      name: 'detail',
      component: detail
    },
    //添加
    {
      path: '/add',
      title: '添加',
      name: 'add',
      component: add
    },
    //编辑
    {
      path: '/edit/:id',
      title: '编辑',
      name: 'edit',
      component: add
    },
    //基础设置
    {
      path: '/set',
      title: '基础设置',
      name: 'set',
      component: set
    },
    //登录
    {
      path: '/login',
      title: '登录',
      name: 'login',
      component: login
    },
  ]
})