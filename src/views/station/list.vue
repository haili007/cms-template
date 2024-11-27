//服务站等级配置表
<template>
  <div>
    <!-- 查询条件 -->
    <el-form label-width="100px" :inline="true" :model="form" class="demo-form-inline">
      <el-row>
        <el-form-item class="item-width" label="服务站编号">
          <el-input v-model="form.stationCode" placeholder="服务站编号"></el-input>
        </el-form-item>
        <el-form-item class="item-width" label="服务站名称">
          <el-input v-model="form.stationName" placeholder="服务站名称"></el-input>
        </el-form-item>
        <el-form-item class="item-width" label="服务站等级">
          <el-select style="width:202px;" v-model="form.stationLevel" placeholder="请选择">
            <el-option
              v-for="item in stationLevels"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="item-width" label="创建时间">
          <el-date-picker
            v-model="form.createTime"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label=" ">
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-row>
    </el-form>
    <div>
        <!-- 其他内容 -->
        <el-button type="primary" @click="showAddDialog">新增</el-button>
        <!-- 新增弹框组件 -->
        <add-dialog ref="addDialog" @save="handleSave"></add-dialog>
    </div>
    
    <!-- 表格展示 -->
    <el-table size="mini" :data="list" border style="width: 100%">
      <el-table-column align="center" type="index" label="序号"></el-table-column>
      <el-table-column width="300" align="center" label="服务站编号">
        <template slot-scope="scope">
          <span>{{ scope.row.stationCode }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="服务站名称">
        <template slot-scope="scope">
          <span>{{ scope.row.stationName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="服务站等级">
        <template slot-scope="scope">
          <span>{{ getStationLevel(scope.row.stationLevel) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建时间">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建人">
        <template slot-scope="scope">
          <span>{{ scope.row.creator }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="更新时间">
        <template slot-scope="scope">
          <span>{{ scope.row.updateTime }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="更新人">
        <template slot-scope="scope">
          <span>{{ scope.row.updater }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          <span>{{ getStatus(scope.row.status) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button @click="detail(scope.row)" style="margin:5px 0" size="mini">查看</el-button><br />
          <el-button v-if="scope.row.status==1" @click="enable(scope.row)" style="margin:5px 0" size="mini">启用</el-button>
          <el-button v-if="scope.row.status==2" @click="disable(scope.row)" style="margin:5px 0" size="mini">禁用</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-row style="padding:15px;text-align:right">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="form.currentPage"
        :page-sizes="pageSizes"
        :page-size="form.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import { getList, enableStation, disableStation } from "@/api/";
import { timeFormat } from "@/utils/";

export default {
  data() {
    return {
      stationLevels: [
        { value: 1, label: "非常重要" },
        { value: 2, label: "重要" },
        { value: 3, label: "一般" },
        { value: 4, label: "很差" },
      ],
      form: {
        currentPage: 1,
        pageSize: 10,
        stationCode: null,
        stationName: null,
        stationLevel: null,
        createTime: null,
      },
      pageSizes: [10, 20, 30, 40],
      total: 0,
      list: [],
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      getList(this.form).then((response) => {
        this.list = response.data.list;
        this.total = response.data.total;
      });
    },
    handleSizeChange(val) {
      this.form.pageSize = val;
      this.search();
    },
    handleCurrentChange(val) {
      this.form.currentPage = val;
      this.search();
    },
    detail(row) {
      // 实现查看详情的逻辑
    },
    enable(row) {
      enableStation(row.id).then(() => {
        this.search();
      });
    },
    disable(row) {
      disableStation(row.id).then(() => {
        this.search();
      });
    },
    getStationLevel(level) {
      // 根据等级值返回对应的等级文本
      switch (level) {
        case 1:
          return "非常重要";
        case 2:
          return "重要";
        case 3:
          return "一般";
        case 4:
          return "很差";
        default:
          return "未知";
      }
    },
    getStatus(status) {
      // 根据状态值返回对应的状态文本
      switch (status) {
        case 1:
          return "启用";
        case 2:
          return "禁用";
        default:
          return "未知";
      }
    },
  },
};
</script>