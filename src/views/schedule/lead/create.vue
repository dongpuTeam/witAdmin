<style scoped>
.header {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #f0f0f0;
}
.header-left {
  border: none;
}
/* main */
.main {
  position: relative;
  margin-top: 20px;
  padding-right: 10%;
}
.main-title::before {
  content: "";
  position: absolute;
  left: -20px;
  top: 0;
  display: inline-block;
  width: 7px;
  height: 25px;
  background-color: blue;
}
.main-title {
  margin-left: 35px;
  height: 25px;
  position: relative;
}
.main-radios {
  padding: 20px;
}
.main-clash{
  width: 100%;
  min-height: 150px;
  padding:20px;
  margin-bottom:22px;
  background-color:#f0f0f0;
}
.main-clash-title{
  margin-bottom:30px;
}
.main-clash-main{
  margin-bottom:20px;
}
.main-clash-name{
  margin-right: 20px;
  width: 25em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color:red;
}
.main-clash-person{
  min-width: 8em;
  margin-right: 20px;
}
.main-form-tag .el-switch{
  margin-right: 50px;
}
.main-title-subtitle{
  color:red;
  font-weight: normal;
  font-size: 12px;
  margin-left: 10px;
}
.main-add{
  margin:50px auto;
  width: 300px;
  height: 50px;
  color:red;
  line-height: 50px;
  text-align:center;
  background-color: #f0f0f0;
}
</style>

<template>
  <div class="wrap">
    <!-- header -->
    <div class="header flex align-center justify-between">
      <div @click="backSave(0)" class="header-left hand">
        <i class="el-icon-arrow-left"></i>返回
      </div>
      <h4>创建行程</h4>
      <el-button @click="backSave(1)" type="primary">保存</el-button>
    </div>
    <!-- main -->
    <div class="main">
      <h4 class="main-title flex align-center">基本信息</h4>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <el-radio
            v-for="(type,index) in form.type"
            :key="index"
            v-model="radio"
            :label="index+''"
          >{{type}}</el-radio>
        </el-form-item>
        <el-form-item label="会议名称">
          <el-input placeholder="请输入会议名称" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="会议概要">
          <el-input placeholder="请输入会议概要" v-model="form.outline"></el-input>
        </el-form-item>
        <el-form-item label="是否公开">
          <el-radio-group v-model="form.public">
            <el-radio label="公开"></el-radio>
            <el-radio label="私密"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="会议纪要">
          <el-radio-group v-model="form.summary">
            <el-radio label="必须"></el-radio>
            <el-radio label="非必须"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="选择时间">
          <el-date-picker
            v-model="form.time"
            type="datetimerange"
            align="right"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00', '08:00:00']"
          ></el-date-picker>
        </el-form-item>
        <!-- 分管领导 -->
        <div class="flex">
          <el-form-item label="分管领导">
            <el-col :span="100">
              <el-autocomplete
                class="inline-input"
                v-model="form.state1"
                :fetch-suggestions="querySearch"
                placeholder="选择分管领导"
                @select="handleSelect"
              >
              <i slot="prefix" class="el-input__icon el-icon-plus"></i>
              </el-autocomplete>
            </el-col>
          </el-form-item>
          <el-form-item label="领导秘书">
            <el-col :span="100">
              <el-autocomplete
                class="inline-input"
                v-model="form.state2"
                :fetch-suggestions="querySearch"
                placeholder="选择领导秘书"
                @select="handleSelect"
              >
               <i slot="prefix" class="el-input__icon el-icon-plus"></i>
              </el-autocomplete>
            </el-col>
          </el-form-item>
        </div>
        <!-- 参加领导 -->
        <el-form-item label="参加领导">
            <el-col :span="100">
              <el-autocomplete
                class="inline-input"
                v-model="form.state3"
                :fetch-suggestions="querySearch"
                placeholder="选择参加领导"
                @select="handleSelect"
              >
               <i slot="prefix" class="el-input__icon el-icon-plus"></i>
              </el-autocomplete>
            </el-col>
        </el-form-item>
        <!-- 行为冲突 -->
        <div class="main-clash">
          <h4 class="main-clash-title">该时间段内与****领导的行程有冲突，冲突行为为：</h4>
          <div v-for="(item,index) in clashs" :key="index" class="flex main-clash-main">
            <p class="main-clash-name">{{item.name}}</p>
            <p class="main-clash-person">{{item.person}}</p>
            <p class="main-clash-time">{{item.time}}</p>
          </div>
        </div>

         <!-- 参与人员 -->
        <el-form-item label="参与人员">
            <el-col :span="100">
              <el-autocomplete
                class="inline-input"
                v-model="form.state4"
                :fetch-suggestions="querySearch"
                placeholder="选择参与人员与部门"
                @select="handleSelect"
              >
               <i slot="prefix" class="el-input__icon el-icon-plus"></i>
              </el-autocomplete>
            </el-col>
        </el-form-item>

        <!-- 可见范围 -->
        <el-form-item label="可见范围">
            <el-col :span="100">
              <el-autocomplete
                class="inline-input"
                v-model="form.state5"
                :fetch-suggestions="querySearch"
                placeholder="选择可见人员或部门（默认职权以上或参与人员可见）"
                @select="handleSelect"
              >
               <i slot="prefix" class="el-input__icon el-icon-plus"></i>
              </el-autocomplete>
            </el-col>
        </el-form-item>

        <!-- 行程地点 -->
        <el-form-item label="行程地点">
            <el-col :span="100">
              <el-autocomplete
                class="inline-input"
                v-model="form.state5"
                :fetch-suggestions="querySearch"
                placeholder="选择行程地点"
                @select="handleSelect"
              >
               <i slot="prefix" class="el-input__icon el-icon-location"></i>
              </el-autocomplete>
            </el-col>
        </el-form-item>

        <!-- 会议标签 -->
         <el-form-item class="main-form-tag" label="会议标签" prop="tag">
            <el-switch 
              v-for="(item,index) in form.tags"
              :key="index"
              v-model="item.tag"
              :active-text="item.text">
            </el-switch>
            <!-- <el-switch
              v-model="form.tag.tag2"
              active-text="交流内容">
            </el-switch> -->
        </el-form-item>
      </el-form>
      <h4 class="main-title flex align-center">添加会议议题
        <span class="main-title-subtitle">添加一个或多个议题，会议才能创建成功</span>
      </h4>
      <div @click="addIssue" class="main-add hand">
        <i class="el-icon-plus"></i>
        职能部门意见</div>
    </div>
  </div>
</template>
   
<script>
export default {
  data() {
    return {
      radio: "0",
      form: {
        type: [
          "会议",
          "调研",
          " 活动",
          " 中央及部委",
          " 专题汇报",
          " 交流",
          " 来访及访问",
          " 全年规划"
        ],
        name: "",
        outline: "",
        public: "1",
        summary: "",
        time: "",
        state1: "",
        state2: "",
        state3:"",
        state4:"",
        state5:"",
        tags:[
          {
            tag:false,
            text:'有看板'
          },
          {
            tag:false,
            text:'交流内容'
          },
          {
            tag:false,
            text:'需要决策'
          },
          {
            tag:false,
            text:'有议题'
          },
          {
            tag:false,
            text:'需要评分'
          }
        ]
      },
      
      clashs:[
        {
          name:'网易会议网易会议网易会议网易会议网易会议网易会议网易会议',
          person:'李总',
          time:'2018年-12-02 15：00-15：45'
        },
        {
          name:'腾讯会议',
          person:'李总',
          time:'2018年-12-02 15：00-15：45'
        },
        {
          name:'小米会议',
          person:'李总',
          time:'2018年-12-02 15：00-15：45'
        }
      ]
    };
  },

  activated() {},
  created() {},
  mounted() {
    this.restaurants = this.loadAll();
  },
  computed: {},
  methods: {
    backSave(index) {
      this.$router.push({
        name:'lead'
      })
    },

    onSubmit() {
      console.log("submit!");
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号"
        },
        { value: "茶芝兰（奶茶，手抓饼）", address: "上海市普陀区同普路1435号" }
      ];
    },
     createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
    handleSelect(item) {
      console.log(item);
    }
  }
};
</script>

