
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
          <!-- <el-tree :data="data6" node-key="id" default-expand-all @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver"
  @node-drag-end="handleDragEnd" @node-drop="handleDrop" draggable :allow-drop="allowDrop" :allow-drag="allowDrag">
          </el-tree> -->
      </div>
      <!-- 用户管理 -->
      <div class="ritbox">
          <h1>组织架构管理</h1>
      </div>
  </div>
</div>


</template>
   
<script>
import { validateMobile } from "../../plugins/validate.js";
import { validateEmail } from "../../plugins/validate.js";
export default {
  data() {
    var validatedepart = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入部门'));
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
        dialogFormVisible: false,
        formLabelWidth: '120px',
        
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

</style>

