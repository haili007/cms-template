const SET_TITLE = 'SET_TITLE'
const GET_USERINFO = 'GET_USERINFO'
const RECORD_USERINFO = 'RECORD_USERINFO'
const RECORD_PHONE = 'RECORD_PHONE'
const GETRECORD_PHONE = 'GETRECORD_PHONE'
const SET_LOADING = 'SET_LOADING'
const SET_PATH = 'SET_PATH'

import { setStore, getStore } from '../utils/storage'
export default {
  //记住登录账号
  [RECORD_PHONE](state,phone){
    if(phone&&/1\d{10}/.test(phone)){
      setStore("recodePhone",phone);
      state.recodePhone=phone;
    }
  },
  //同步记住的账号
  [GETRECORD_PHONE](state){
    let phone = getStore("recodePhone");
    if(phone&&/1\d{10}/.test(phone)){
      state.recodePhone=phone;
    }
  },
  // 设置加载完成状态
  [SET_PATH] (state,path){
    state.path=path
  },
  // 设置加载完成状态
  [SET_LOADING] (state,load){
    state.loading=load
  },
  // 设置页面路径标题
  [SET_TITLE] (state,title){
    state.title=title
  },
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    setStore('userInfo', info)
  },
  // 获取用户信息
  [GET_USERINFO] (state) {
    if (state.userInfo) {
      return
    }
    let info = getStore("userInfo");
    try{
      info=JSON.parse(info);
    }catch(e){
      info=null;
    }
    if (info) {
      state.userInfo = {...info}
    } else {
      state.userInfo = null
    }
  }
}
