
import http from "./public"


//login登录
export const login = (param, call) => {
    
    http.fetchPost('/mng/doLogin.json',param).then(data=>{
        call(data)
    }).catch(e=>{
         alert(JSON.stringify(e))
        call({code:-999,msg:'系统异常'})
    });
}

//获取商品列表
export const getList = (param, call) => {
    let snedData = param;
    http.fetchGet(basePath + '/item/itemList.json', snedData).then(data => {
        console.log(data);
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}