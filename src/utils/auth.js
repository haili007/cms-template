//权限定义模型  operator：运营；financer：财务；administrator：管理员；boss：老板；gemologist：鉴定师 sales 销售
import store from "@/store/"; 

export default {
    queryMenu(){
        let role=''
        if(store.state.userInfo){
            role=store.state.userInfo.roleCode;
        }
        if(role instanceof String){
            if(role&&this[role]&&this[role]['menu']){
                return this[role]['menu'];
            }
        }
        if(role instanceof Array){
            let menus=[];
            for(let i=0;i<role.length;i++){
                if(role&&this[role[i]]&&this[role[i]]['menu']){
                    menus=menus.concat(this[role[i]]['menu']);
                }
            }
            return menus;
        }
        return [];
    },
    query(mod='',page=''){
        let role=''
        if(store.state.userInfo){
            role=store.state.userInfo.roleCode;
        }
        if(role instanceof String){
            if(role&&this[role]&&this[role][mod]&&this[role][mod][page]){
                return this[role][mod][page];
            }
        }
        if(role instanceof Array){
            if(role=="administrator"||role.includes("administrator")){
                return ['查看', "打印通知书", "收款", "打款" ,'审核' ,'修改密码','新增', '停用', '解卡',"操作"];
            }
            let auths=[];
            for(let i=0;i<role.length;i++){
                if(role&&this[role[i]]&&this[role[i]][mod]&&this[role[i]][mod][page]){
                    auths=auths.concat(this[role[i]][mod][page]);
                }
            }
            //console.log(auths);
            return auths;
        }
        
        return [];
    },
    administrator: {
        '全部': '全部',
        menu: [1,11,2,21,22,23,3,31,32,4,41,42,6,61,62,63,64,65,66,67,7,71]
    },
    financer: {
        menu: [1,11,4,42,6,61,62,63,65,66,67],
        '财务管理': {
            '财务概况': ['查看'],
            '交易明细': ['查看'],
            '财务流水': ['查看'],
            '违规处理': ['查看', "打印通知书", "收款", "打款"],
            '基础设置': ['查看','编辑'],
        },
        '商家管理': {
            '商家列表': ['查看', '审核'],
            '商家详情': ['查看', '审核'],
        },
        '鉴定中心': {
            '鉴定订单': ['查看'],
        }
    },
    operator: {
        menu: [1,11,2,21,22,23,3,31,32,4,41,6,61,62,64,66],
        '商家管理': {
            '商家列表': ['查看'],
            '商家详情': ['查看'],
        },
        '商品管理': {
            '商品列表': ['查看','审核'],
            '商品详情': ['查看','审核'],
            '品牌管理': ['查看'],
            '类目管理': ['查看','编辑'],
        },
        '订单管理': {
            '订单列表': ['查看'],
            '基础设置': ['查看','编辑'],
        }
        ,
        '鉴定中心': {
            '中心信息': ['查看', '修改密码'],
        },
        '消息管理': {
            '公告管理': ['查看','操作'],
            '公告编辑': ['查看','操作'],
            '公告详情': ['查看','操作'],
            '消息详情': ['查看','操作'],
        },
        '财务管理': {
            '交易明细': ['查看'],
            '商家财务': ['查看'],
            '基础设置': ['查看','编辑'],
        }
    },
    sales: {
        menu: [1,11,2,21,6,65],
        '商家管理': {
            '商家列表': ['查看', '编辑', '新增', '停用','启用', '解卡'],
            '商家详情': ['查看', '编辑', '新增', '停用','启用', '解卡'],
        },
        '商品管理': {
            '商品列表': ['查看']
        },
        '财务管理': {
            '违规处理': ['查看', "打印通知书"],
        }
    },
    boss: {
        menu: [1,11,2,21,3,31,6,65,64],
        '商家管理': {
            '商家列表': ['查看'],
            '商家详情': ['查看'],
        },
        '商品管理': {
            '商品列表': ['查看']
        },
        '财务管理': {
            '财务概况': ['查看'],
            '商家财务': ['查看'],
        },
        '订单管理': {
            '订单列表': ['查看']
        }
    },
    gemologist: {
        menu: [4,41,42],
        '鉴定中心': {
            '中心信息': ['查看', '修改密码'],
            '鉴定订单': ['查看', '操作'],
        },
    }
}