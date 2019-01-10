<template>
  <div class="topic_list">
    <!-- 标题 -->
    <div class="topic_list_title">
      <div>
        <p>议题库</p>
      </div>
      <div>
        <el-button size="small">打印</el-button>
        <el-button size="small">导出</el-button>
      </div>
    </div>
    <div class="topic_list_createtopic">
      <div>
        <el-button size="small" class="primary" type="primary">创建议题</el-button>
      </div>
      <!-- 议题过滤 -->
      <div class="topic_list_down">
        <el-button>议题过滤</el-button>
      </div>
    </div>
    <div class="topic_list_filtration">
      <!-- 议题类型 -->
      <div class="topic_list_filtration_type">
        <span>议题类型</span>&nbsp;
        <el-select v-model="type" placeholder="请选择" size="middle" style="width:317px">
          <el-option
            v-for="item in IssueType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <!-- 议题状态 -->
      <div class="topic_list_filtration_state">
        <span>议题状态</span>&nbsp;
        <el-select
          v-model="state"
          placeholder="请选择"
          size="middle"
          style="width:317px"
          class="border-radius"
        >
          <el-option
            v-for="item in IssueStatus"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <!-- 关键字 -->
      <div class="toplic_list_filtration_keyword">
        <div>
          <span>关键字</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input placeholder="请输入搜索关键字" size="middle" style="width:317px" v-model="keyword"></el-input>
        </div>
        <!-- 过滤按钮 -->
        <div>
          <el-button type="primary" size="middle" class="primary">过滤</el-button>
        </div>
      </div>
    </div>
    <!-- 议题详情 -->
    <div class="toplic_list_filtration_details">
      <hr>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%;" @selection-change="changeFun" :header-cell-style="tableHeaderColor">
        <el-table-column prop="name" label="议题名称" width="200"></el-table-column>
        <el-table-column prop="classes" label="类别" align="center"></el-table-column>
        <el-table-column prop="principal" label="议题负责人" align="center"></el-table-column>
        <el-table-column prop="specification" label="相关材料" align="center"></el-table-column>
        <el-table-column prop="issueStatus" label="状态" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" v-if="scope.row.issueStatus==1" style="color:#000000">草稿</el-button>
            <el-button type="text" size="small" v-else-if="scope.row.issueStatus==2" style="color:#FF0000">待审核</el-button>
            <el-button type="text" size="small" v-else-if="scope.row.issueStatus==3" style="color:#2881F0">已审核</el-button>
            <el-button type="text" size="small" v-else-if="scope.row.issueStatus==4" style="color:#009900">关闭</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="操作" align="center" width="300">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small" width="190" class="color">查看详情</el-button>
            <el-button type="text" size="small" v-if="scope.row.approvalStatus==1" style="color:#FF0000" width="190">提交审批</el-button>
            <el-button type="text" size="small" v-if="scope.row.approvalStatus==2" style="color:#FF0000" width="190">查阅审批</el-button>
            <el-button type="text" size="small" v-if="scope.row.approvalStatus==3" style="color:#AEAEAE" width="190">&nbsp;&nbsp;已审核&nbsp;&nbsp;</el-button>
            <el-button type="text" size="small" width="190">编辑</el-button>
            <el-button type="text" size="small" width="190">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="create" align="center" type="selection" width="248">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      // 议题类型
      IssueType: [
        {
          value: "选项1",
          label: "公司董事会"
        },
        {
          value: "选项2",
          label: "公司党委全面工作"
        },
        {
          value: "选项3",
          label: "公司战略规划"
        },
        {
          value: "选项4",
          label: "干部管理"
        },
        {
          value: "选项5",
          label: "重大风险管控"
        },
        {
          value: "选项6",
          label: "法务工作"
        },
        {
          value: "选项7",
          label: "公司(党委)办公室"
        },
        {
          value: "选项8",
          label: "北京办事处"
        }
      ],
      // 议题状态
      IssueStatus: [
        {
          value: "选项1",
          label: "全部"
        },
        {
          value: "选项2",
          label: "草稿"
        },
        {
          value: "选项3",
          label: "待审批"
        },
        {
          value: "选项4",
          label: "已审批"
        },
        {
          value: "选项5",
          label: "关闭"
        }
      ],
      type: "",
      state: "",
      keyword: "",
      // 议题详情数据
      checkBoxData: [], //多选框选择的值
      // 备注:状态数字 1:草稿;2:待审核;3:已审核;4:关闭;
      //      审批状态:1:提交审批;2:查阅审批;3:已审核
      tableData: [
        {
          name: "mocus立项事宜议题",
          classes: "投资立项",
          principal: "甘处",
          specification: "无",
          issueStatus: "1",
          approvalStatus:"1",
          operation: "",
        },
        {
          name: "mocus立项事宜议题",
          classes: "投资立项",
          principal: "甘处",
          specification: "无",
          issueStatus: "2",
          approvalStatus:"3",
          operation: "",
        },
        {
          name: "mocus立项事宜议题",
          classes: "投资立项",
          principal: "甘处",
          specification: "无",
          issueStatus: "3",
          approvalStatus:"3",
          operation: "",
        },
        {
          name: "mocus立项事宜议题",
          classes: "投资立项",
          principal: "甘处",
          specification: "无",
          issueStatus: "4",
          approvalStatus:"2",
          operation: "",
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(row) {
      console.log(row);
    },
    //选项发生变化时触发事件
    changeFun(val) {
      this.checkBoxData = val;
    },
    //设置表头背景颜色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color:#D7D7D7;color: #000000;font-weight: 500;'
      }
    },

  }
};
</script>

<style scoped>
/* 表单按键公共样式 */
button.el-button{
    margin:0px;
    margin-right: 8px;
}
img.permissions_details_img {
    height: 20px;
    vertical-align: middle;
}
.border-radius{
    border-radius: 0px;
}
.pointer{
    cursor: pointer;
    color:#18598C;
}
/* 通用蓝色按钮 */
.primary{
    background: #18598C;
    color: #FFFFFF;
    border-radius: 0px;
}
/* add */
span{
    color: #000000;
    font-size: 12px !important;
}
div.topic_list {
  margin: 20px;
}
div.topic_list_title {
  display: flex;
  justify-content: space-between;
  line-height: 51px;
  border-bottom: 1px solid #d7d7d7;
}
div.topic_list_createtopic {
  display: flex;
  justify-content: left;
}
div.topic_list_createtopic button {
  margin: 10px;
  border-radius: 0px;
}
/* 议题过滤 */
div.topic_list_down button::after {
  /* content: url(../../assets/arrowsdown.png); */
  vertical-align: middle;
}
div.topic_list_down button,
div.topic_list_filtration {
  background: #d7d7d7;
}
div.topic_list_filtration {
  width: 100%;
  height: 195px;
  margin-top: -10px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  text-align: center;
}
div.toplic_list_filtration_keyword {
  width: 50%;
}
div.toplic_list_filtration_keyword div:first-child {
  margin-bottom: 20px;
}
div.toplic_list_filtration_keyword div:last-child button {
  margin-left: -300px;
}
div.topic_list_filtration_type,
div.topic_list_filtration_state {
  margin-top: 20px;
  width: 50%;
}
/* 议题详情 */
div.toplic_list_filtration_details {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
