<style scoped src="../../../../public/css/permissionsBase.css"></style>
<style scoped>
/* add */

.top{
  margin: 20px;
}
.top .top_title {
  line-height: 51px;
}
/* 议题过滤 */
.top-fil {
  width: 100%;
  height: 195px;
  flex-wrap: wrap;
  text-align: center;
  background: #d7d7d7;
}
.top-fil .top-fil-type,
.top-fil .top-fil-state {
  margin-top: 20px;
  width: 50%;
}
/* 关键字 */
.top-keywrod {
  width: 50%;
}
.top-keywrod div:first-child {
  margin-bottom: 20px;
}
.top-keywrod div:last-child button {
  margin-left: -300px;
}
/* 议题详情 */
.top-down {
  width: 110px;
  height: 40px;
  background: #18598c;
  color: #edf2f6;
  line-height: 40px;
  text-align: center;
  margin: 10px;
}
/* 切换active */
div.active {
  height: 50px;
  margin-bottom: 0px;
  line-height: 50px;
  background: #d7d7d7;
  color: #000000;
}
/* 创建议题 */
.upload-demo button::before {
  content: url(../../../assets/issues_clip.png);
  vertical-align: middle;
}
/* 职能部门意见 */
.dep-fun .dep {
  margin: 15px;
  width: 80%;
}
.dep-fun .dep:hover {
  background: #f2f2f2;
}
/* 添加职能部门意见 */
.dep-add {
  width: 80%;
  text-align: center;
}
/* 选择领导 */
.dep-led .sel {
  margin-bottom: 10px;
}
.dep-dec {
  text-align: center;
  margin-right: 20%;
}
/* 右侧锚点点击 */
.anchor{
  position:fixed;
  top:370px;
  right: 30px;
}
.anchor ul li{
  height: 60px;
  width: 125px;
  border:1px solid #E4E4E4;
  line-height: 60px;
  text-align: center;
  background: #F2F2F2;
}
</style>

<template>
  <div class="top">
    <!-- 标题 -->
    <div class="top_title flex-text-between">
      <div>
        <p>议题库</p>
      </div>
      <div>
        <el-button size="small">打印</el-button>
        <el-button size="small">导出</el-button>
      </div>
    </div>
    <hr>
    <div class="flex-text-start">
      <div class="top-down pointer" :class="{active:tab == 1}" @click="tab = 1">创建议题</div>
      <!-- 议题过滤 -->
      <div
        class="top-down pointer"
        :class="{active:tab == 2}"
        @click="tab = 2;pullchange(pull)"
      >
        议题过滤
        <img :src="pull?img.img1:img.img2" alt class="imgmiddle">
      </div>
    </div>
    <div v-show="tab==2">
      <div class="top-fil flex-text-start" v-show="pull">
        <!-- 议题类型 -->
        <div class="top-fil-type">
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
        <div class="top-fil-state">
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
        <div class="top-keywrod">
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
        <hr>
      <div>
        <el-table
          :data="tableData"
          border
          style="width: 100%;"
          @selection-change="changeFun"
          :header-cell-style="tableHeaderColor"
        >
          <el-table-column prop="name" label="议题名称" width="200"></el-table-column>
          <el-table-column prop="classes" label="类别" align="center"></el-table-column>
          <el-table-column prop="principal" label="议题负责人" align="center"></el-table-column>
          <el-table-column prop="specification" label="相关材料" align="center"></el-table-column>
          <el-table-column prop="issueStatus" label="状态" align="center">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                v-if="scope.row.issueStatus==1"
                style="color:#000000"
              >草稿</el-button>
              <el-button
                type="text"
                size="small"
                v-else-if="scope.row.issueStatus==2"
                style="color:#FF0000"
              >待审核</el-button>
              <el-button
                type="text"
                size="small"
                v-else-if="scope.row.issueStatus==3"
                style="color:#2881F0"
              >已审核</el-button>
              <el-button
                type="text"
                size="small"
                v-else-if="scope.row.issueStatus==4"
                style="color:#009900"
              >关闭</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="operation" label="操作" align="center" width="300">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                width="190"
                class="color"
              >查看详情</el-button>
              <el-button
                type="text"
                size="small"
                v-if="scope.row.approvalStatus==1"
                style="color:#FF0000"
                width="190"
              >提交审批</el-button>
              <el-button
                type="text"
                size="small"
                v-else-if="scope.row.approvalStatus==2"
                style="color:#FF0000"
                width="190"
              >查阅审批</el-button>
              <el-button
                type="text"
                size="small"
                v-else-if="scope.row.approvalStatus==3"
                style="color:#AEAEAE"
                width="190"
              >&nbsp;&nbsp;已审核&nbsp;&nbsp;</el-button>
              <el-button type="text" size="small" width="190">编辑</el-button>
              <el-button type="text" size="small" width="190">删除</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="create" align="center" type="selection" width="248"></el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 创建议题 -->
    <div v-show="tab==1">
      <div class="flex-text-between">
        <div>
          <img src="../../../assets/issues_leftarrow.png" alt class="imgmiddle">
          返回
        </div>
        <div>创建议题</div>
        <div>
          <el-button size="small">保存</el-button>
        </div>
      </div>
      <hr>
      <div class="flex">
        <div class="create">
          <!-- 基本信息 -->
          <div class="margin">
            <img src="../../../assets/issues_longshtring.jpg" alt class="imgmiddle">
            基本信息
          </div>
          <div class="width">
            <el-form ref="basic" :model="basic" label-width="80px">
              <el-form-item label="议题类型">
                <template>
                  <el-radio v-model="basic.radio" label="1">调研决策</el-radio>
                  <el-radio v-model="basic.radio" label="2">网信委会议</el-radio>
                  <el-radio v-model="basic.radio" label="3">投资立项</el-radio>
                  <el-radio v-model="basic.radio" label="4">产品评审</el-radio>
                </template>
              </el-form-item>
              <!-- 议题名称 -->
              <el-form-item label="议题名称">
                <el-input v-model="basic.name" placeholder="添加议题名称"></el-input>
              </el-form-item>
              <!-- 汇报材料 -->
              <el-form-item label="汇报材料">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-change="handleChange"
                  :file-list="basic.fileList3"
                >
                  <el-button size="small" type="primary">上传附件</el-button>
                  <div slot="tip" class="el-upload__tip">单个附件最大支持100M</div>
                </el-upload>
              </el-form-item>
              <!-- 议题备注 -->
              <el-form-item label="议题备注">
                <el-input type="textarea" :rows="1" placeholder="关于该议题的相关说明" v-model="basic.remark"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <!-- 职能部门意见 -->
          <div class="margin">
            <img src="../../../assets/issues_longshtring.jpg" alt class="imgmiddle">
            职能部门意见
          </div>
          <div class="dep-fun">
            <div class="dep hover" v-for="item of departmentIdea" :key="item.index">
              <div class="flex-text-between padding-8px">
                <p>{{item.title}}</p>
                <div class>
                  <el-button size="small" icon="el-icon-edit">编辑</el-button>
                  <el-button size="small" icon="el-icon-remove">删除</el-button>
                </div>
              </div>
              <div class="padding-8px">
                <p>{{item.comment}}</p>
              </div>
            </div>
          </div>
          <!-- 添加职能部门意见 需添加功能-->
          <div class="dep-add">
            <i class="el-icon-plus"></i>
            <span>职能部门意见</span>
          </div>
          <hr>
          <!-- 添加领导意见 -->
          <div class="margin">
            <img src="../../../assets/issues_longshtring.jpg" alt class="imgmiddle">
            添加领导意见
          </div>
          <div class="dep-led width">
            <div>
              <el-form ref="leader" :model="leader" label-width="80px">
                <el-form-item label="选择领导">
                  <el-input v-model="leader.name" placeholder="选择领导" class="sel"></el-input>
                  <el-input v-model="leader.idea" placeholder="领导的意见导入" class="sel"></el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class="flex-text-end">
              <el-button type="primary">完成</el-button>
              <el-button>取消</el-button>
            </div>
          </div>
          <hr>
          <!-- 决策事项 -->
          <div class="margin">
            <img src="../../../assets/issues_longshtring.jpg" alt class="imgmiddle">
            决策事项
          </div>
          <div class="dep-dec">
            <i class="el-icon-plus"></i>
            <span>需要决策事项</span>
          </div>
        </div>
        <!-- 右侧锚点点击 -->
        <div class="anchor" @click="anchor($event)">
          <ul class="none pointer">
            <li>基本信息</li>
            <li>职能部门意见</li>
            <li>领导意见</li>
            <li>
              <img src="../../../assets/issues_uparrows.png" alt="">
              回到顶部
              </li>
          </ul>
        </div>
      </div>
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
          approvalStatus: "1",
          operation: ""
        },
        {
          name: "mocus立项事宜议题",
          classes: "投资立项",
          principal: "甘处",
          specification: "无",
          issueStatus: "2",
          approvalStatus: "3",
          operation: ""
        },
        {
          name: "mocus立项事宜议题",
          classes: "投资立项",
          principal: "甘处",
          specification: "无",
          issueStatus: "3",
          approvalStatus: "3",
          operation: ""
        },
        {
          name: "mocus立项事宜议题",
          classes: "投资立项",
          principal: "甘处",
          specification: "无",
          issueStatus: "4",
          approvalStatus: "2",
          operation: ""
        }
      ],
      // 显示影藏
      tab: 2,
      pull: true,
      img: {
        img1: require("../../../assets/arrowsup.png"),
        img2: require("../../../assets/arrowsdown.png")
      },
      //基本信息form表单
      basic: {
        name: undefined,
        report: undefined,
        remark: undefined,
        radio: undefined,
        fileList3: [
          {
            name: "food.jpeg",
            url:
              "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          },
          {
            name: "food2.jpeg",
            url:
              "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          }
        ]
      },
      // 职能部门意见
      departmentIdea: [
        {
          title: "*****部门一",
          comment:
            "MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案"
        },
        {
          title: "*****部门一",
          comment:
            "MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案MOCUS相关业务使用场景方案"
        }
      ],
      // 领导意见
      leader: {
        name: undefined,
        idea: undefined
      },
      //锚点数据
      anchor:[]
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
        return "background-color:#D7D7D7;color: #000000;font-weight: 500;";
      }
    },
    // 点击显示详情过滤页面
    pullchange(pull) {
      this.pull = !this.pull;
      console.log(this.pull);
    },
    // 上传文件
    handleChange(file, fileList) {
      this.fileList3 = fileList.slice(-3);
    },
    //锚点点击事件
    anchor(e){
              var e = e || window.event;
              var target = e.target || e.srcElement;
              console.log(target);
              if(target.nodeName.toLowerCase() === 'li'){
                alert();
              }
            }
  }
};
</script>
