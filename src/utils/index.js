import Auth from "./auth";
import { confirm } from "./tips";
import { removeStore } from "./storage";
import printModel from "./print";
import router from '@/router'

//查询状态文字
export const getState = (k, obj) => {
    let str = "";
    return str;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i]["value"] == k) {
            str = obj[i]["label"];
        }
    }
    return str;
}

//查询这个月的默认日期
export const queryMonthDay = () => {
    let data = new Date();
    return [data.getFullYear() + "-" + (data.getMonth() > 9 ? "" : "0") + (data.getMonth() + 1) + "-" + '01', data.getFullYear() + "-" + (data.getMonth() >= 9 ? "" : "0") + (data.getMonth() + 1) + "-" + (data.getDate() > 9 ? "" : "0") + data.getDate()];
}
//时间转化
export const timeFormat = (data) => {
    return data.getFullYear() + "-" + (data.getMonth() >= 9 ? "" : "0") + (data.getMonth() + 1) + "-" + (data.getDate() > 9 ? "" : "0") + data.getDate();
}
//退出登录
export const loginOut = (data) => {
    removeStore("userInfo");
    router.push("/login");
}

/* 
 * addEventListener:监听Dom元素的事件 
 * 
 * target：监听对象 
 * type：监听函数类型，如click,mouseover 
 * func：监听函数 
 */
export const addEventHandler = (target, type, func) => {
    if (target.addEventListener) {
        //监听IE9，谷歌和火狐 
        target.addEventListener(type, func, false);
    } else if (target.attachEvent) {
        target.attachEvent("on" + type, func);
    } else {
        target["on" + type] = func;
    }
}
/* 
 * removeEventHandler:移除Dom元素的事件 
 * 
 * target：监听对象 
 * type：监听函数类型，如click,mouseover 
 * func：监听函数 
 */
export const removeEventHandler = (target, type, func) => {
    if (target.removeEventListener) {
        //监听IE9，谷歌和火狐 
        target.removeEventListener(type, func, false);
    } else if (target.detachEvent) {
        target.detachEvent("on" + type, func);
    } else {
        delete target["on" + type];
    }
}

export const prints = printModel;
export const auth = Auth;
export const Confirm = confirm;