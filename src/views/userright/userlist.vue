
<template>
<div class="app">
  <div class="top">
      <div class="lfttit">企业设置<span>/</span>添加成员</div>
      <el-tag>OA系统同步</el-tag>
  </div>
  <div class="main">
      <div class="lftbox">
          <h1>公司组织架构 <i class="el-icon-plus" @click="dialogFormVisible = true"></i></h1>
          <!-- 新建部门dialog -->
          <el-dialog title="新建部门" :visible.sync="dialogFormVisible">
              <el-form :model="partform" :rules="partformrule" ref="partform">
                  <el-form-item label="部门名称" prop="name" :label-width="formLabelWidth">
                      <el-input v-model="partform.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="所属部门" prop="region" :label-width="formLabelWidth">
                      <el-select v-model="partform.region" placeholder="选择所属部门">
                          <el-option label="技术部" value="1"></el-option>
                          <el-option label="业务部" value="2"></el-option>
                          <el-option label="人事部" value="3"></el-option>
                      </el-select>
                  </el-form-item>
               </el-form>
              <div slot="footer" class="dialog-footer">
                 <el-button @click="dialogFormVisible = false">取 消</el-button>
                 <el-button type="primary" @click="subpartForm('partform')">确 定</el-button>
              </div>
      </el-dialog>
          <el-tree :data="data6" node-key="id" default-expand-all @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver"
  @node-drag-end="handleDragEnd" @node-drop="handleDrop" draggable :allow-drop="allowDrop" :allow-drag="allowDrag">
          </el-tree>
      </div>
      <!-- 用户管理 -->
      <div class="ritbox">
        <h1>前端部门</h1>
        <div class="navbox">
            <div class="tabs">
                <div :class="{active:tab == 1}" @click="tab = 1">添加人员</div>
                <div :class="{active:tab == 2}" @click="tab = 2">过滤人员</div>
            </div>
            <el-dropdown>
                <el-button type="primary" class="deal">批量处理<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                <el-dropdown-menu slot="dropdown">
                    <p>批量处理（选中1项）</p>
                    <el-dropdown-item>批量加入管理组</el-dropdown-item>
                    <el-dropdown-item>批量移出部门</el-dropdown-item>
                    <el-dropdown-item>批量移动</el-dropdown-item>
                    <el-dropdown-item>批量删除人员</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <i class="el-icon-setting"></i>
        </div>
            <!-- 添加人员 -->
            <div v-show="tab==1">
                <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="ruleForm demo-ruleForm">
                    <el-form-item label="姓名" prop="name">
                        <el-input type="text" v-model="ruleForm2.name"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input type="text" v-model="ruleForm2.email"></el-input>
                    </el-form-item>
                    <el-form-item label="手机" prop="phone">
                        <el-input v-model="ruleForm2.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="座机" prop="zuoji">
                        <el-input v-model="ruleForm2.zuoji"></el-input>
                    </el-form-item>
                    <div class="line"></div>
                    <el-form-item label="部门" prop="depart">
                        <el-input v-model="ruleForm2.depart"></el-input>
                    </el-form-item>
                    <el-form-item label="职务" prop="job">
                        <el-input v-model="ruleForm2.job"></el-input>
                    </el-form-item>
                    <el-form-item label="身份">
                        <el-radio-group v-model="ruleForm2.radio2">
                            <el-radio :label="1">领导</el-radio>
                            <el-radio :label="2">秘书</el-radio>
                            <el-radio :label="3">普通成员</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="关联领导">
                        <el-select v-model="ruleForm2.region" placeholder="请选择领导">
                            <el-option label="领导一" value="1"></el-option>
                            <el-option label="领导二" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <div class="line"></div>
                    <el-form-item label="允许快捷登录">
                        <el-switch v-model="ruleForm2.islogin"></el-switch>
                    </el-form-item>
                    <el-form-item label="是否可见">
                        <el-switch v-model="ruleForm2.isshow"></el-switch>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">保存并继续添加</el-button>
                        <el-button type="primary" @click="submitForm('ruleForm2')">保存</el-button>
                        <el-button @click="resetForm('ruleForm2')">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <!-- 过滤人员 -->
            <div v-show="tab==2">
                <div class="filterbox">
                    <el-form :model="filtForm" :rules="filter" ref="filtForm" label-width="150px" class="demo-ruleForm filterform">
                        <el-form-item label="真实姓名" prop="realname">
                            <el-input v-model="filtForm.realname"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" prop="email">
                            <el-input v-model="filtForm.email"></el-input>
                        </el-form-item>
                        <el-form-item label="角色" prop="part">
                            <el-input v-model="filtForm.part"></el-input>
                        </el-form-item>
                        <el-form-item class="glbox">
                            <el-button type="primary" @click="submitfilt('filtForm')">过滤</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <el-table ref="multipleTable" :data="filtertable" tooltip-effect="dark" style="width: 100%;margin-top:20px;border-top:1px solid #ebeef5;" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="email" label="邮箱">
                    </el-table-column>
                    <el-table-column prop="part" label="部门">
                    </el-table-column>
                    <el-table-column prop="job" label="职位">
                    </el-table-column>
                    <el-table-column prop="phone" label="手机号">
                    </el-table-column>
                    <el-table-column prop="sex" label="性别">
                    </el-table-column>
                    <el-table-column prop="leader" label="关联领导">
                    </el-table-column>
                </el-table>
                <el-pagination background layout="prev, pager, next" :total="200" class="footslidebar"></el-pagination>
            </div>    
            
      </div>
  </div>
</div>


</template>
   
<script>
import { validateMobile } from "../../plugins/validate.js";
import { validateEmail } from "../../plugins/validate.js";
export default {
  data() {
    var validatename = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        }else {
          callback();
        }
    };
    // 真实姓名
    var validaterealname = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入真实姓名'));
        }else {
          callback();
        }
    };
    // 角色
    var validatepart = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入角色'));
        }else {
          callback();
        }
    };
    var validateemail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱'));
        }else if(!validateEmail(value)){
          callback(new Error('邮箱格式不正确'));
        } else {
          callback();
        }
    };
    var validatephone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        }else if(!validateMobile(value)){
          callback(new Error('手机号格式不正确'));
        } else {
          callback();
        }
    };
    var validatezuoji = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入座机'));
        }else {
          callback();
        }
    };
    var validatedepart = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入部门'));
        }else {
          callback();
        }
    };
    var validatejob = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入职务'));
        }else {
          callback();
        }
    };  
    var validatebumen = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择所属部门'));
        }else {
          callback();
        }
    }; 
    return {
        data6: [{
          id: 1,
          label: '集团总部',
          children: [{
            id: 4,
            label: '信息部',
            children: [{
              id: 9,
              label: '信息部1'
            }, {
              id: 10,
              label: '信息部2'
            }]
          }]
        }, {
          id: 2,
          label: '技术部',
          children: [{
            id: 5,
            label: '前端部门'
          }, {
            id: 6,
            label: '后台部门'
          }]
        }, {
          id: 3,
          label: '财务部',
          children: [{
            id: 7,
            label: '财务部1'
          }]
        }],
        ruleForm2: {
          name: '',
          email: '',
          phone:'',
          zuoji:'',
          depart:'',
          job:'',
          radio2:2,
          region:'',
          islogin:true,
          isshow:true
        },
        rules2: {
          name: [
            { validator: validatename, trigger: 'blur' }
          ],
          email: [
            { validator: validateemail, trigger: 'blur' }
          ],
          phone: [
            { validator: validatephone, trigger: 'blur' }
          ],
          zuoji: [
            { validator: validatezuoji, trigger: 'blur' }
          ],
          depart: [
            { validator: validatedepart, trigger: 'blur' }
          ],
          job: [
            { validator: validatejob, trigger: 'blur' }
          ],
        },
        filtForm:{
          realname:'',
          email:'',
          part:''    
        },
        filter:{
            realname:[
                {validator: validaterealname, trigger: 'blur' }
            ],
            email:[
                {validator: validateemail, trigger: 'blur' }
            ],
            part:[
                {validator: validatepart, trigger: 'blur' }
            ],
        },
        // 过滤人员table
        filtertable: [{
          name: '王小虎',
          email: '123654789@qq.com',
          part:'业务部',
          job:'人事',
          phone:'13256852122',
          sex:'女',
          leader:''
        }, {
          name: '李大仁',
          email: '36854215@qq.com',
          part:'财务部',
          job:'会计',
          phone:'13698523222',
          sex:'男',
          leader:'测试领导'
        }, {
          name: '王小虎',
          email: '123654789@qq.com',
          part:'业务部',
          job:'人事',
          phone:'13256852122',
          sex:'女',
          leader:''
        }],
        // 新建部门form
        partform:{
          name:'',
          region:''
        },
        partformrule:{
            name:[
                {validator: validatedepart, trigger: 'blur' }
            ],
            region:[
                {validator: validatebumen, trigger: 'blur' }
            ],
        },
        multipleSelection: [],
        dialogFormVisible: false,
        formLabelWidth: '120px',
        tab:2,
        
    }
    
  },

  activated(){
     
  },
  created() {
    
  },
  mounted() {


  },
  computed: {

  },
  methods: {
      //公司组织架构新建部门
      subpartForm(formName) {
        this.$refs[formName].validate((valid) => {
          var fs=this.partform.region;
          if (valid) {
            console.log(fs);
            this.dialogFormVisible=false;
            this.partform.name='';
            this.partform.region='';
          }else {
            return false;
            
          }
        });
      },
      //登录
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          var fs=this.ruleForm2.region;
          if (valid) {
            alert('submit!');
            console.log(fs);
          }else {
            return false;
            
          }
        });
      },
    //   过滤
      submitfilt(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            // console.log('fs');
          }else {
            return false;
          }
        });
      },
    //   过滤人员table
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
      
  }
};
</script>
<style scoped>
.app{
  /* width: 100vw;
  height: 100vh; */
  background-color:#ffffff;
  padding: 0 2%;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
.el-aside {
    color: #333;
}
.top{
    width: 100%;
    padding:11px 0;
    overflow: hidden;
}
.top .lfttit{
    width: 16%;
    height: 28px;
    line-height: 28px;
    float: left;
    font-size: 12px;
    color: #434343;
}
.top .lfttit span{
    margin: 0 12px;
}
.main{
    width:100%;
    min-width: 1200px;
    overflow: hidden;
    border-top:1px solid #d7d7d7;
    height: 100%;
}
.main .lftbox{
    width: 16%;
    height: 100%;
    overflow: hidden;
    border-right:1px solid #d7d7d7; 
    float: left;
}
.main .lftbox h1{
    font-size: 16px;
    color: #666666;
    line-height: 45px;
    font-weight: normal;
}
.main .lftbox h1 i{
    font-size: 20px;
    color: #666666;
    font-weight: bold;
    margin-left: 30px;
    cursor: pointer;
}
.main .ritbox{
    width: 82%;
    padding: 0 30px;
    overflow: hidden;
    float: left;
}
.main .ritbox h1{
    font-size: 14px;
    color: #333333;
    line-height: 50px;
    font-weight: normal;
}
.navbox{
    width: 100%;
    height: 47px;
}
.navbox i.el-icon-setting{
    font-size: 28px;
    color:#2881f0;
    float: right;
}
.tabs{
      height: 47px;
      float: left;
  }
  .tabs div{
      display: inline-block;
      float: left;
      padding: 0 30px;
      height:37px;
      line-height:37px;
      margin-right: 30px;
      font-size: 12px;
      color: #fff;
      cursor: pointer;
      border-radius: 2px;
      background: #18598c;
  }
  .tabs div.active{
      background: #e4e4e4;
      color: #000000;
      height:47px;
      line-height:47px;
  }
.el-dropdown-menu{
    widows: 186px;
    background: #f1f1f1;
}
.el-dropdown-menu p{
      widows: 100%;
      text-align: center;
      font-size: 14px;
      color: #333333;
      line-height: 46px;
      border-bottom: 1px solid #f1f1f1;
  }
  .el-button--primary.deal{
      background: #18598c;
      height:37px;
      font-size: 12px;
      border-radius: 2px;
      border:1px solid #18598c;
  }
  .line{
      width: 100%;
      height: 1px;
      border: 1px dashed #d7d7d7;
      margin: 20px 0;
  }
  .demo-ruleForm{
      margin:25px 0;
  }
  .ruleForm .el-form-item{
      width: 100%;
  }
  .ruleForm .el-input{
      width: 340px;
  }
  /* 过滤人员 */
  .filterbox{
      width: 100%;
      padding: 14px 0;
      background: #d7d7d7;
      overflow: hidden;
  }
  .filterform{
      overflow: hidden;
      margin: 0;
  }
  .filterform .el-form-item{
      float: left;
  }
.filterform .el-input{
    width: 280px;
}
.glbox{
    width: 100%;
    margin-bottom: 0;
}
.footslidebar{
    display: flex;
    justify-content: center;
    margin: 30px 0;
}
</style>

