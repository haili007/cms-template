// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import UI from '../lib/lgbui.min'
Vue.use(UI)
Vue.use(ElementUI)

Vue.config.productionTip = false

const whiteList = [] // 不需要登陆的页面



router.beforeEach(function (to, from, next) {
  store.commit("GETRECORD_PHONE");
  store.commit("GET_USERINFO");
  //store.commit("SET_LOADING",true);
  if(to.path=="/login"){
    store.commit("SET_PATH","login");
  }else
  {
    store.commit("SET_PATH",to.path);
  }
  console.log(store.state)
  if (store.state.userInfo||to.path=="/login") { // 白名单{"loginId":"18888888888","employeeNo":"157","roleCode":"administrator","employeeName":"dev员工","phoneNo":"dev001","expireTime":1514466974000,"status":"opened"}
    next()
  } else {
    next('/login')
  }
})

router.afterEach(function (to, from, next) {
  document.documentElement.scrollTop=0;
  document.title=to.name;
  store.commit("SET_TITLE",to.name);
  // setTimeout(()=>{
     store.commit("SET_LOADING",false);
  // },1000);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
