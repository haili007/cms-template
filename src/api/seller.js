import http from "./public"
import { timeFormat } from "@/utils/index"
import { basePath } from "@/store/contain"

//获取商家列表数据
export const sellerList = (param, call) => {
    http.fetchGet(basePath + '/merchant/merchantList.json', param).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}

//获取商家信息
export const sellerDetail = (param, call) => {
    http.fetchGet(basePath + '/merchant/merchantById.json', param).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}



//商家绑卡
export const bindCard = (param, call) => {
    //默克数据
    let data = { code: 0, msg: "成功" };
    call(data);
    //http.fetchGet("url",param).then();
}

//商家解绑
export const unbindCard = (param, call) => {
    http.fetchPost(basePath + '/merchant/auditing.json', param).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}

//商家审核
export const sellerExamine = (param, call) => {
    //默克数据
    http.fetchPost(basePath + '/merchant/auditing.json', param).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}

//商家提交审核
export const submitExamine = (param, call) => {
    http.fetchPost(basePath + '/merchant/submitAuditing.json', param).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}

//商家停用
export const sellerStop = (param, call) => {
    let snedData = { merchantCode: param.merchantCode, status: "stopped" };
    http.fetchPost(basePath + '/merchant/stop.json', snedData).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}
//商家启用
export const sellerStart = (param, call) => {
    let snedData = { merchantCode: param.merchantCode, status: "opened" };
    http.fetchPost(basePath + '/merchant/stop.json', snedData).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}


//商家编码是否被使用
export const checkSellerCode = (param, call) => {
    let snedData = { merchantCode: param.merchantCode };
    http.fetchGet(basePath + '/merchant/stop.json', snedData).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}


//添加商家
export const saveSeller = (param, call) => {
    let senddata = Object.assign({}, param);
    senddata.province = senddata.businessAddress[0];
    senddata.city = senddata.businessAddress[1];
    senddata.area = senddata.businessAddress[2];
    senddata.contractBeginTime = timeFormat(senddata.contractPeriod[0])
    senddata.contractEndTime = timeFormat(senddata.contractPeriod[1])
    senddata.commonImages = [];
    if (senddata.isCertnoThreeInOne == 1) {
        senddata.phone.length = senddata.phone.length - 2;
    }
    for (let i = 0; i < senddata.phone.length; i++) {
        senddata.commonImages[i] = {
            "imageBizType": senddata.phone[i]['imageBizType'],
            "imageFilePath": senddata.phone[i]['src'],
        }
    }
    if (!senddata.merchantStatus) {
        senddata.merchantStatus = 'init';
    }
    delete senddata.commonImageList;
    delete senddata.contractPeriod;
    delete senddata.phone;
    senddata.commonImages = JSON.stringify(senddata.commonImages);
    http.fetchPost(basePath + '/merchant/save.json', senddata).then(data => {
        call(data)
    }).catch((e) => {
        call({ code: -999, msg: '系统异常' })
    });
}
