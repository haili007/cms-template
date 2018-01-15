import citys from "./citys";

//系统基础url位置
export const base = ""
//系统接口地址前缀
export const basePath = "/mng"
//城市地址
export const getCitys = () => {
    let temp = [];
    for (let k in citys) {
        let provice = {
            value: k,
            label: k,
            children: []
        }
        for (let h in citys[k]) {
            let city = {
                value: h,
                label: h,
                children: []
            }
            for (let i = 0; i < citys[k][h].length; i++) {
                let area = {
                    value: citys[k][h][i],
                    label: citys[k][h][i],
                }
                city.children.push(area);
            }
            provice.children.push(city);
        }
        temp.push(provice);
    }
    return temp;
};

//菜单配置
export const Menu = [
    { "id": 1,  "parentId": 0, "name": "测试用例", "path": base + "/" },
    { "id": 11, "parentId": 1, "name": "列表", "path": base + "/list" },
    { "id": 12, "parentId": 1, "name": "详情", "path": base + "/detail" },
    { "id": 13, "parentId": 1, "name": "新增编辑", "path": base + "/add" },
    { "id": 14, "parentId": 1, "name": "设置", "path": base + "/set" },
    { "id": 15, "parentId": 1, "name": "登录", "path": base + "/login" },
]

//商家资质图片配置
export const PhoneOpt = {
    phoneList: [
        { msg: "银行开户许可证", width: "180px", height: "140px" },
        { msg: "法人身份证", width: "180px", height: "140px" },
        { msg: "商家门头照片", width: "180px", height: "140px" },
        { msg: "商家内部照片1", width: "180px", height: "140px" },
        { msg: "商家内部照片2", width: "180px", height: "140px" },
        { msg: "法人手持身份证照", width: "180px", height: "140px" },
        { msg: "法人手持银行卡照", width: "180px", height: "140px" },
        { msg: "企业营业执照", width: "180px", height: "140px" },
        { msg: "组织机构代码", width: "180px", height: "140px" },
        { msg: "税务登记证", width: "180px", height: "140px" },
    ],
    phone: [{ "imageBizType":"4", }, {"imageBizType":"5",}, {"imageBizType":"6",}, {"imageBizType":"7",}, {"imageBizType":"8",}, {"imageBizType":"9",}, {"imageBizType":"10",}, {"imageBizType":"1",}, {"imageBizType":"2",}, {"imageBizType":"3",}]
}

//商品状态  0新建，1待审核，2上架，3下架，4锁定，5删除，6停用
export const State = [
    { value: "", label: "全部" },
    { value: 0, label: "新建" },
    { value: 1, label: "待审核" },
    { value: 2, label: "上架" },
    { value: 3, label: "下架" },
    { value: 4, label: "锁定" },
    { value: 6, label: "停用" },
    { value: 7, label: "售罄" },
    //{ value: 5, label: "已删除" },
]