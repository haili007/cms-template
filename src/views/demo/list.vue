<template>
    <div >
        <lqb-card style="margin-top:15px;margin-bottom:15px;">
            <el-form  label-width="100px" :inline="true" :model="form" class="demo-form-inline">
                <el-row>
                        <el-form-item class="item-width" label="商品名称">
                            <el-input v-model="form.title" placeholder="商品名称"></el-input>
                        </el-form-item>
                        <el-form-item class="item-width" label="商品状态">
                           <el-select style="width:202px;" v-model="form.itemStatus" placeholder="请选择">
                                <el-option
                                v-for="item in goodState"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>    
                        </el-form-item>
                        <el-form-item class="item-width" label="来源商家">
                            <el-input v-model="form.sellerName" placeholder="来源商家"></el-input>
                        </el-form-item>
                        <el-form-item class="item-width" label="发布时间">
                            <el-date-picker  
                                v-model="form.times" type="daterange" 
                                align="right" unlink-panels
                                range-separator="至"  start-placeholder="开始日期" end-placeholder="结束日期"
                            >
                            </el-date-picker>
                        </el-form-item>
                </el-row>
                <el-row>
                        <el-form-item label=" ">
                            <el-button type="primary" @click="serchGoods">查询</el-button>
                        </el-form-item>
                </el-row>
                </el-form>
            </lqb-card>
            <lqb-card>
                    <el-table size="mini" :data="list" border style="width: 100%">
                        <el-table-column align="center" type="index" label="序号" > </el-table-column>
                        <el-table-column width="300" align="center" label="商品" > 
                            <template slot-scope="scope">
                            <lc-img-colum >
                                    <img style="width:100px;height:100px" :src="scope.row.itemImgPath" slot="img" />
                                    <p  slot="detail">
                                           {{scope.row.title}} 
                                    </p>
                               </lc-img-colum>
                              </template> 
                        </el-table-column>
                        <el-table-column align="center" prop="icCode" label="商品识别码"> </el-table-column>
                        <el-table-column align="center" prop="salePrice" label="售价"> </el-table-column>
                        <el-table-column align="center" prop="pubDate" label="发布时间"> </el-table-column>
                        <el-table-column align="center"  label="商品状态"> 
                            <template  slot-scope="scope">
                                  {{getGoodsState(scope.row.itemStatus)}} 
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="sellerName" label="来源商家"> </el-table-column>
                        <el-table-column align="center"  label="操作">
                            <template slot-scope="scope">
                                  <el-button @click='detail(scope.row)' style="margin:5px 0" size="mini" >查看</el-button><br/>
                                  <el-button v-if="scope.row.itemStatus==1" @click='detail(scope.row)' style="margin:5px 0" size="mini" >审核</el-button>
                            </template> 
                        </el-table-column>
                    </el-table>
                    <el-row style="padding:15px;text-align:right">
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="form.currentPage"
                            :page-sizes="pageSizes"
                            :page-size="form.pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total">
                        </el-pagination>
                    </el-row>
            </lqb-card>    
    </div> 
</template>

<script>
import { getList } from "@/api/";
import { State } from "@/store/contain";
import { timeFormat } from "@/utils/";
export default {
  data() {
    return {
      goodState: State,
      form: {},
      params: {
        pageSize: 10,
        page: 1
      },
      pageSizes: [10, 20, 30, 40],
      total: 0,
      list: []
    };
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    getGoodsState(k) {
      let str = "";
      for (let i = 0; i < State.length; i++) {
        if (State[i]["value"] == k) {
          str = State[i]["label"];
        }
      }
      return str;
    },
    getGoodsList() {
      getList(this.params, res => {
        if ((res.code = 100)) {
          this.list = res.data && res.data.list;
          this.total = res.data && res.data.totalCount;
        } else {
          this.$message(res.msg ? res.msg : "请求数据失败");
        }
      });
    },
    serchGoods() {
      this.form.pageSize = this.params.pageSize;
      this.params = Object.assign({}, this.form);
      // contractBeginTime
      this.params.startTime =
        this.params.times && this.params.times[0]
          ? timeFormat(this.params.times[0])
          : "";
      this.params.endTime =
        this.params.times && this.params.times[1]
          ? timeFormat(this.params.times[1])
          : "";
      this.params.page = 1;
      this.getGoodsList();
    },
    handleSizeChange(e) {
      this.params.pageSize = e;
      this.params.page = 1;
      this.getGoodsList();
    },
    handleCurrentChange(e) {
      this.params.page = e;
      this.getGoodsList();
    },
    detail(row) {
      this.$router.push("/detail/" + row.itemId);
    }
  }
};
</script>

<style scoped>

</style>
