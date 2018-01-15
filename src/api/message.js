import http from './public'
import { basePath } from '@/store/contain'

// 公告管理
// 获取公告列表
export const getNoticeList = (params) => {
  return http.fetchPost('', params)
}
// 新增/编辑公告
export const addNotice = (params) => {
  return http.fetchPost('', params)
}
// 发布/删除公告
export const releaseNotice = (params) => {
  return http.fetchPost('', params)
}
// 公告详情
export const getNoticeDetail = (params) => {
  return http.fetchPost('', params)
}

// 消息管理
// 获取消息列表
export const getSysNoticeList = (params) => {
  return http.fetchPost('', params)
}
// 新增/编辑消息
export const addSysNotice = (params) => {
  return http.fetchPost('', params)
}
// 发布/删除消息
export const releaseSysNotice = (params) => {
  return http.fetchPost('', params)
}
// 公告详情
export const getSysNoticeDetail = (params) => {
  return http.fetchPost('', params)
}