import http from "./public"
import { basePath } from "@/store/contain"

//获取财务概况
export const financeInfo = (param, call) => {
    let data={}

    call(data);
    // http.fetchGet(basePath+'/merchant/merchantList.json',param).then(data=>{
    //     call(data)
    // }).catch((e)=>{
    //     call({code:999,msg:"系统异常,接口请求失败"});
    // });
}

//获取财务基础设置信息
export const baseSet = (param, call) => {
    //默克数据
    let data = { code: 100, msg: "成功" };
    call(data);
    // http.fetchGet(basePath+'/merchant/merchantList.json',param).then(data=>{
    //     call(data)
    // }).catch((e)=>{
    //     call({code:999,msg:"系统异常,接口请求失败"});
    // });
}

//设置财务基础设置信息
export const saveBaseSet = (param, call) => {
    let data = { code: 100, msg: "成功" };
    call(data);
    // http.fetchGet(basePath+'/merchant/merchantList.json',param).then(data=>{
    //     call(data)
    // }).catch((e)=>{
    //     call({code:999,msg:"系统异常,接口请求失败"});
    // });
}

//设置财务基础设置信息
export const fineList = (param, call) => {
    let data =[
        {
          id: "15",
          NO: "1ssdsdss",
          slllerName: "博时轩",
          legal: "zhanglei",
          legalTel: "15474745152",
          bond: "2511.00",
          contactName: "zhanglei",
          contactTel: "15474745152",
          state: "已开通",
          cardState: "已绑卡",
          salesMan: "爱丁猫",
          createTime: "2017-12-23"
        }
      ];
    call(data);
    // http.fetchGet(basePath+'/merchant/merchantList.json',param).then(data=>{
    //     call(data)
    // }).catch((e)=>{
    //     call({code:999,msg:"系统异常,接口请求失败"});
    // });
}


