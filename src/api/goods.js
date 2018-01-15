
import http from "./public"
import {basePath} from "@/store/contain" 

//获取商品列表
export const goodsList = (param, call) => {
    let snedData = param;
    http.fetchGet(basePath + '/item/itemList.json', snedData).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}
//获取商品详情
export const goodsDetail = (param, call) => {
    http.fetchGet(basePath + '/item/itemById.json', param).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}
//商品审核
export const goodsExamine = (param, call) => {
    http.fetchPost(basePath + '/item/auditing.json', param).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}
//获取类目列表
export const categoryList = (param, call) => {
    http.fetchGet(basePath + '/category/categoryList.json', param).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}
//获取属性详情
export const propertyDetail = (param, call) => {
    http.fetchGet(basePath + '/category/getPropListByCatId.json', param).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}   

//获取品牌列表
export const brandList = (param, call) => {
    
    http.fetchGet(basePath + '/brand/brandListPage.json', param).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}   

//获取品牌详情
export const brandDetail = (param, call) => {
    http.fetchGet(basePath + '/brand/brandById.json', param).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
} 

//查询一级分类
export const  firstCategoryList = (param, call) => {
    http.fetchGet(basePath + '/category/firstCategoryList.json', param).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
} 

