import http from './public'
import { basePath } from '@/store/contain'
// import jsonp from 'jsonp'
// const parseParam = function(param) {
//   let paramStr = "";
//   if ( typeof param == "object" ) {
//     for(let key in param){
//       paramStr += "&" + key + "=" + param[key];
//     }
//   }
//   return paramStr.substr(1);
// }
// // 自动补全
// export const completion = (params,call) => {
//   jsonp('https://sug.so.360.cn/suggest'+"?"+parseParam(params), null, call)
// }
// 修改密码,运营后台
export const setModifyPassword = (params) => {
  return http.fetchPost(basePath + '/modifyPassword.json', params)
}
// 修改密码,鉴定中心
export const setPassword = (params) => {
  return http.fetchPost('', params)
}
// 获取基本信息
export const getBasicInfo = (params) => {
  return http.fetchPost('', params)
}
// 获取订单详情
export const getOrderDetail = (params) => {
  return http.fetchPost('', params)
}
// 获取订单列表
export const getOrderList = (params) => {
  return http.fetchPost('', params)
}
// 确认收货
export const confirmReceipt = (params) => {
  return http.fetchPost('', params)
}
// 鉴定处理
export const setIdentifyDispose = (params) => {
  return http.fetchPost('', params)
}
