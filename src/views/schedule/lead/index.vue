<style scoped>
.item-header {
  border-bottom: 2px solid #f0f0f0;
  padding: 20px 0;
}
.item-header-btn1 {
  margin-left: auto;
}
/* item-body */
.item-body {
  padding: 20px 0;
  position: relative;
}
.item-body-btn2 {
  margin-left: 20px;
  color: #000;
  border: 1px solid #f0f0f0;
  background-color: #f0f0f0;
}
.item-body-btn2-active {
  padding: 15px 20px;
  position: relative;
  top: 5px;
}
.transform180 {
  transform: rotate(180deg);
}

.item-body-item {
  background-color: #f0f0f0;
  width: 100%;
  padding: 20px 20% 20px 10%;
  min-height: 200px;
  margin-top: 5px;
}
.item-body-item .el-form-item:nth-child(even) {
  margin-left: 5%;
}
.el-date-picker {
  margin-left: 5%;
}
.el-select,
.el-input {
  width: 400px;
}
.btn-keyword {
  align-self: flex-end;
}

/* title */
.title {
  position: relative;
  margin: 50px 0 100px 0;
}
.title-switch {
  background-color: #409eff;
  margin-right: 50px;
  color: #fff;
  padding: 4px 8px;
  border-radius: 5px;
}
.title-switch-text {
  margin-left: 5px;
}
.el-icon-date {
  font-size: 35px;
}
.title-today {
  margin-left: 50px;
}
.title-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.title-time-h3 {
  margin: 0 20px;
}

/* table */
.table {
  margin: 0 5% 50px 5%;
  border: 1px solid #000;
}
.table-header,
.table-footer {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0 50px;
  background-color: #f0f0f0;
}
.table-footer {
  text-align: center;
}
.table-header-day {
  margin-right: 50px;
}

.main{
  background:pink;
  width:100%;
  min-height:30vh;
}
</style>


<template>
  <div v-show="show" class="wrap">
    <!-- header -->
    <div class="item-header flex align-center">
      <h5>领导行程</h5>
      <el-button type="primary" plain class="item-header-btn1">打印</el-button>
      <el-button type="primary" plain class="item-header-btn2">导出</el-button>
    </div>
    <!-- body -->
    <div class="item-body">
      <div class="item-body-btnGroup">
        <el-button @click="createSchedule" type="primary">创建行程</el-button>
        <el-button @click="filterSchedult" class="item-body-btn2" type="info">
          行程过滤
          <i class="el-icon-arrow-up" :class="{transform180:!filterShow}"></i>
        </el-button>
      </div>
      <div
        v-show="filterShow"
        :class="{'item-body-btn2-active':!filterShow}"
        class="item-body-item"
      >
        <el-form ref="form" :model="form" class="flex flex-wrap" label-width="80px">
          <el-form-item label="领导名称">
            <el-select v-model="form.leader" placeholder="请选择领导名称">
              <el-option label="李强" value="shanghai"></el-option>
              <el-option label="王兵" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="业务类型">
            <el-select v-model="form.business" placeholder="请选择业务类型">
              <el-option label="业务类型1" value="业务类型1"></el-option>
              <el-option label="业务类型2" value="业务类型2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="行程类别">
            <el-select v-model="form.schedule" placeholder="请选择行程类别">
              <el-option label="行程类别1" value="行程类别1"></el-option>
              <el-option label="行程类别2" value="行程类别2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="领导名称">
            <el-select v-model="form.region" placeholder="请选择领导名称">
              <el-option label="李强" value="shanghai"></el-option>
              <el-option label="王兵" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="领导名称">
            <el-select v-model="form.region" placeholder="请选择领导名称">
              <el-option label="李强" value="shanghai"></el-option>
              <el-option label="王兵" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <!-- time -->
          <el-form-item label="选择时间">
            <el-date-picker
              v-model="value7"
              type="datetimerange"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']"
            ></el-date-picker>
          </el-form-item>
          <!-- 关键词 -->
          <el-form-item label="关键词">
            <el-input v-model="form.keyword"></el-input>
          </el-form-item>
        </el-form>
        <el-button class="btn-keyword" type="primary">过滤</el-button>
      </div>
    </div>
    <!-- title -->
    <div class="title flex align-center justify-center">
      <div class="title-time flex">
        <i class="el-icon-arrow-left"></i>
        <h3 class="title-time-h3">2018年12月23日</h3>
        <i class="el-icon-arrow-right"></i>
      </div>
      <el-button class="title-today" type="primary">今天</el-button>
      <div class="title-right flex align-center">
        <router-link :to="{path:'leadMonth'}">
          <div class="title-switch hand flex align-center">
            <i class="el-icon-date"></i>
            <span class="flex title-switch-text">切换日历模式</span>
          </div>
        </router-link>
        <el-button-group>
          <el-button type="primary">日</el-button>
          <el-button type="primary">周</el-button>
          <el-button type="primary">月</el-button>
        </el-button-group>
      </div>
    </div>

    <!-- main -->
    <div class="main">
       <router-view></router-view>
    </div>
    <!-- table -->
    <!-- <div v-for="(table,index) in tables" :key="index" class="table">
      <div class="table-header">
        <span class="table-header-day">{{table.date}}</span>
        <span class="table-header-week">{{table.week}}</span>
      </div>
      <el-table :data="table.tableData" border style="width: 100%">
        <el-table-column align="center" label="行程时间" prop="time" width="234"></el-table-column>
        <el-table-column align="center" label="行程主题" prop="theme" width="234"></el-table-column>
        <el-table-column align="center" label="主导领导" prop="leader" width="234"></el-table-column>
        <el-table-column align="center" label="行程地点" prop="addr" width="234"></el-table-column>
        <el-table-column align="center" label="负责人" prop="principal" width="234"></el-table-column>
        
        <el-table-column align="center" label="审批状态" prop="state" width="234">
          <template slot-scope="scope">
            <el-button type="danger" v-if="scope.row.state==='0'">审核中</el-button>
            <el-button type="warning" v-else-if="scope.row.state==='1'">待审核</el-button>
            <el-button type="success" v-else>已通过</el-button>
          </template>
        </el-table-column>
       
        <el-table-column align="center" label="操作" prop="operation" width="234">
          <template slot-scope="scope">
            <el-button>{{scope.row.operation}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="table-footer">
        <span @click="createSchedule" class="hand">
          <i class="el-icon-plus"></i>
          新建行程
        </span>
      </div>
    </div> -->
  </div>
</template>


<script>
export default {
  name: "comLead",

  componentName: "comLead",

  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      filterShow: false,
      value7: "",
      tables: [
        {
          date: "2018年12月18日",
          week: "星期二",
          tableData: [
            {
              time: "10:00-10.30",
              theme: "与中央电视台记者交流汽车",
              leader: "李总、王总、总部各部门领导",
              addr: "湖北省武汉市-集团总部",
              principal: "李宗",
              state: "0",
              operation: "..."
            },
            {
              time: "10:00-10.30",
              theme: "与中央电视台记者交流汽车",
              leader: "李总、王总、总部各部门领导",
              addr: "湖北省武汉市-集团总部",
              principal: "李宗",
              state: "1",
              operation: "..."
            }
          ]
        },
        {
          date: "2018年12月19日",
          week: "星期三",
          tableData: [
            {
              time: "10:00-10.30",
              theme: "与中央电视台记者交流汽车",
              leader: "李总、王总、总部各部门领导",
              addr: "湖北省武汉市-集团总部",
              principal: "李宗",
              state: "2",
              operation: "..."
            }
          ]
        },
        {
          date: "2018年12月20日",
          week: "星期四",
          tableData: [
            {
              time: "10:00-10.30",
              theme: "与中央电视台记者交流汽车",
              leader: "李总、王总、总部各部门领导",
              addr: "湖北省武汉市-集团总部",
              principal: "李宗",
              state: "0",
              operation: "..."
            }
          ]
        }
      ],
      form: {
        leader: "",
        business: "",
        schedule: "",
        region: "",
        keyword: ""
      }
    };
  },
  methods: {
    createSchedule() {
      // :to="{name:'createSchedule'}"
      this.$router.push({
        name: "createSchedule"
      });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    filterSchedult() {
      this.filterShow = !this.filterShow;
    }
  }
};
</script>
