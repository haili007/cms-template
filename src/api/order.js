//获取商品列表
export const orderList = (param, call) => {
    
    let data = [
        {
            id: "15",
            sellerName: "博时轩",
            IDcode: "IDcode",
            price: "￥2511.00",
            goodsProps:"颜色：卡其色 , 成色：99新",
            orderStateTxt: "待审核",
            orderTime: "2017-12-23",
            goodSrc: "http://pic11.secooimg.com/product/200/200/10/10/fecfbf61d8144b08bda76ea77ab00c54.jpg",
            goodName: "TAG Heuer/泰格豪雅林肯系列自动机械男式腕表WAT2112.BA0950"
        }
    ]
    call(data);
}

//获取商品详情
export const orderDetail = (param, call) => {
    
    let data = {
        id: "15",
        sellerName: "博时轩",
        IDcode: "IDcode",
        price: "￥2511.00",
        realPayment:"￥2511.00",
        goodsProps:"颜色：卡其色 , 成色：99新",
        orderStateTxt: "待发货",
        orderTime: "2017-12-23 12:12:00",
        payTime:"2017-12-23 12:12:01",
        buyer:{
            name:"友奢·博时轩002店",
            receiver:"张三—13212345678",
            address:"浙江省 杭州市 拱墅区 祥符街道 海创科技中心4号楼1301室"
        },
        goodsList:[
            {
                id: "15",
                sellerName: "博时轩",
                IDcode: "IDcode",
                price: "￥2511.00",
                goodsProps:"颜色：卡其色 , 成色：99新",
                goodsStateTxt: "待发货",
                orderTime: "2017-12-23",
                goodSrc: "http://pic11.secooimg.com/product/200/200/10/10/fecfbf61d8144b08bda76ea77ab00c54.jpg",
                goodName: "TAG Heuer/泰格豪雅林肯系列自动机械男式腕表WAT2112.BA0950"
            }
        ]
    }
    call(data);
}


//获取订单基本设置
export const orderBase = (param, call) => {
    let data = {
        cancelTime:5,
        receiptTime:5,
        chargebackTime:5,
        rejectTime:5,
    }
    call(data);
}

//获取订单基本信息
export const setOrderBase = (param, call) => {
    let data = {
        code:0, msg:"成功"
    }
    call(data);
}