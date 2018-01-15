import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import action from './action'
Vue.use(Vuex)

const state = {
  userInfo: null, // 用户信息
  title:"首页",
  loading:true,
  recodePhone:'',
  path:"home"
}

export default new Vuex.Store({
  state,
  action,
  mutations
})
