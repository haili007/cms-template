<template>
	<div style="padding:0 10px">
		<lqb-card style="margin-top:15px;margin-bottom:15px;">
			<lqb-info label-width="100px" type="row" align="right" label="商品类目：" >
				{{good.cateName}}
			</lqb-info>
			<lqb-info label-width="100px" type="row" align="right" label="商品属性：" >
			       <div style="padding:5px;background:rgba(242, 242, 242, 1);width:500px">
				       <dl class="detailProps" :key="k" v-for="(item , k) in good.propVals">
						<dt>
							{{item.propertyName}}
						</dt>  
						<dd >
					        {{item.valueData}}
						</dd>
				       </dl>
			       </div>
			</lqb-info>
			<lqb-info label-width="100px" type="row" align="right" label="商品品牌：" >
				{{good.brand&&good.brand.brandName}}
			</lqb-info>
			<lqb-info label-width="100px" type="row" align="right" label="识别码：" >
				{{good.icCode}}
			</lqb-info>
			<lqb-info label-width="100px" type="row" align="right" label="商品名称：" >
				{{good.title}}
			</lqb-info>
			<lqb-info label-width="100px" type="row" align="right" label="商品图片：" >
				<span v-if="good.itemImgUrls">
				<img :key="k" v-for="(item,k) in good.itemImgUrls" :src="item.imageUrl"  width="150" />
				</span>
			</lqb-info>
				<lqb-info label-width="100px" type="row" align="right" label="商品公价：" >
				{{good.pubPrice}}
			</lqb-info>
				<lqb-info label-width="100px" type="row" align="right" label="商品售价：" >
					{{good.salePrice}}
				</lqb-info>
			<lqb-info label-width="100px" type="row" align="right" label="商品详情：" >
				<div v-html="good.itemContent" ></div>
			</lqb-info>
		</lqb-card>
		 <el-row  style="padding:25px;text-align:center">
            <span v-if="authExamine&&good.itemStatus==1" >
                <el-button size="big" @click='examine(1)' type="primary">审核通过</el-button>
                <el-button @click='examine(-1)'  size="big"  >审核不通过</el-button> 
            </span>
            <el-button @click="$router.back()"  size="big"  >返回</el-button>     
        </el-row>
	</div>
</template>

<script>
import { auth, } from "@/utils/";
import { goodsDetail ,goodsExamine } from "@/api/goods";

export default {
  data() {
    return {
      authExamine: auth.query("商品管理", "商品详情").includes("审核"),
	  good: {},
	  form:{},
	  tips: [
        {
          text: "您确定审核通过该商品？（通过后，商品即上架。）",
          success: "审核成功",
          cancel: "已取消操作"
        },
        {
          text: "您确定审核不通过该商品？",
          success: "商品审核状态改变成功",
          cancel: "已取消操作"
        }
	  ],
    };
  },
  mounted() {
    if (this.$route.params.id && !isNaN(this.$route.params.id)) {
	 this.form.itemId=this.$route.params.id;
      goodsDetail(
        {
          itemId: this.$route.params.id //商品ID
        },
        res => {
			if (res.code == 100) {
			this.good = res.data;
			} else {
				this.$message(res.msg ? res.msg : "请求数据失败");
			}
          
        }
      );
    } else {
      this.$message({
        message: "商品id有误页面不存在",
        type: "success"
      });
    }
  },
  methods: {
	examine(k) {
      //审核
      let _this = this;
	  let sendTips = {};
		

      if (k == 1) {
		sendTips = this.tips[0];
        this.form.approvalResult = "1";
      } else {
        sendTips = this.tips[1];
        this.form.approvalResult = "2";
      }
      this.$confirm(sendTips.text, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          goodsExamine(this.form, data => {
            if (data.code == 100) {
              this.$message({
                message: sendTips.success,
                type: "success"
              });
              // console.log();
                setTimeout(()=>{
                    this.$router.back();
                },1000)
              //;
            } else {
              _this.$message({
                message: data.msg ? data.msg : "服务器异常，请求失败",
                type: "warning"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: sendTips.cancel
          });
        });
    }  
  }
};
</script>

<style>
.detailProps {
  display: inline-block;
  width: 48%;
}
.detailProps dd,
.detailProps dt {
  display: inline;
  padding: 5px 5px;
}
.detailProps dd {
  color: #999999;
}
</style>
