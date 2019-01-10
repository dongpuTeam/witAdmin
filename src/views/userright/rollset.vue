
<template>
<div class="app">
  <div class="top">
      <div class="lfttit">用户管理<span>/</span>角色设置</div>
  </div>
  <div class="main">
      <div class="lftbox">
          <h1>角色组</h1>
          <ul>
              <li class="active">
                  <i class="el-icon-edit-outline"></i>
                  <div class="text">
                      <h2>子管理员</h2>
                      <p>系统分组</p>
                  </div>
              </li>
              <li>
                  <i class="el-icon-edit-outline"></i>
                  <div class="text">
                      <h2>公司办秘书组</h2>
                  </div>
              </li>
          </ul>
          <div class="addgroup">
              <p><i class="el-icon-plus"></i>添加用户组</p>
          </div>
      </div>
      <!-- 用户管理 -->
      <div class="ritbox">
          <div class="titbox">
              <h1>角色组成员</h1>
              <span>(10人)</span>
              <p><i class="el-icon-plus"></i>添加成员</p>
          </div>
          <ul class="partbox">
              <li>
                  <i class="el-icon-picture"></i>
                  <p>****部</p>
              </li>
              <li>
                  <i class="el-icon-picture"></i>
                  <p>****部</p>
              </li>
              <li>
                  <i class="el-icon-picture"></i>
                  <p>****部</p>
              </li>
              <li>
                  <i class="el-icon-picture"></i>
                  <p>****部</p>
              </li>
          </ul>
          <div class="titbox">
              <h1>子管理员</h1>
          </div>
          <div class="tbbox">
              <div class="t1">操作对象</div>
              <div class="t2">权限</div>
              <div class="t3">全选</div>
          </div>
          <div class="alltab">
              <div class="only">
                  <div class="t1">用户管理</div>
                  <div class="t2">
                      <el-checkbox-group v-model="checkList">
                          <el-checkbox label="用户编辑"></el-checkbox>
                          <el-checkbox label="用户添加"></el-checkbox>
                          <el-checkbox label="用户删除"></el-checkbox>
                          <el-checkbox label="用户移动"></el-checkbox>
                          <el-checkbox label="用户冻结"></el-checkbox>
                      </el-checkbox-group>
                  </div>
                  <div class="t3">
                      <el-checkbox v-model="checked"></el-checkbox>
                  </div>
              </div>
              <div class="only">
                  <div class="t1">组织架构管理</div>
                  <div class="t2">
                      <el-checkbox-group v-model="checkList">
                          <el-checkbox label="架构编辑"></el-checkbox>
                          <el-checkbox label="架构添加"></el-checkbox>
                          <el-checkbox label="架构删除"></el-checkbox>
                          <el-checkbox label="架构同步"></el-checkbox>
                          <el-checkbox label="架构导出"></el-checkbox>
                      </el-checkbox-group>
                  </div>
                  <div class="t3">
                      <el-checkbox v-model="checked"></el-checkbox>
                  </div>
              </div>
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
    return {
        checkList: ['用户编辑'],
        checked:true
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
    border-bottom: 1px solid #d7d7d7;
}
.main .lftbox ul{
    widows: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
}
.main .lftbox ul li{
    width: 100%;
    padding: 20px 0;
    text-align: center;
    list-style: none;
    border-bottom: 1px solid #d7d7d7;
    overflow: hidden;
    cursor: pointer;
}
.main .lftbox ul li i{
    font-size: 18px;
    color:#666666;
    float: left;
    margin-left:42px;
}
.main .lftbox ul li .text{
    margin-left: 15px;
    float: left;
}
.main .lftbox ul li .text h2{
    font-size: 18px;
    color:#000000;
    font-weight: normal;
}
.main .lftbox ul li .text p{
    font-size: 12px;
    color:#8b8b8b;
    margin-top: 12px;
    text-align: left;
}
.main .lftbox ul li.active i,.main .lftbox ul li.active .text h2{
    color:#2881f0;
}
.main .lftbox .addgroup{
    width: 100%;
    text-align: center;
    height:44px;
    line-height: 44px;
    font-size: 12px;
    color:#2881f0;
    border-bottom: 1px solid #d7d7d7;
    cursor: pointer;
}
.main .lftbox .addgroup i{
    font-size: 18px;
    color:#2881f0;
    font-weight: bold;
    margin-right: 15px;
}
.main .ritbox{
    width: 82%;
    padding: 0 30px;
    overflow: hidden;
    float: left;
}
.main .ritbox .titbox{
    font-size: 14px;
    color: #333333;
    height: 40px;
    line-height: 40px;
    font-weight: normal;
    margin-top: 15px;
}
.main .ritbox .titbox h1{
    font-size: 14px;
    font-weight: normal;
    float: left;
}
.main .ritbox .titbox span{
   margin: 0 25px;
   float: left;
}
.main .ritbox .titbox p{
    font-size: 14px;
    color: #2881f0;
    float: left;
}
.main .ritbox .titbox p i{
    font-weight: bold;
    font-size: 15px;
    margin-right: 5px;
}
.ritbox .partbox{
    width: 100%;
    overflow: hidden;
    background:#d7d7d7;
    margin: 0;
    padding: 0;
}
.ritbox .partbox li{
    float: left;
    height: 90px;
    line-height: 90px;
    margin-left: 30px;
    list-style: none;
}
.ritbox .partbox li i{
    font-size: 20px;
    margin-right: 10px;
    float: left;
    line-height: 90px;
    color: #18598c;
}
.ritbox .partbox li p{
    font-size: 12px;
    color: #18598c;
    float: left;
}
.tbbox{
    width: 100%;
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #d7d7d7;
    font-size: 14px;
    color: #666666;
}
.tbbox .t1,.alltab .only .t1{
    float: left;
    width: 24%;
}
.tbbox .t2,.alltab .only .t2{
    float: left;
    width: 59%;
}
.tbbox .t3,.alltab .only .t3{
    float: right;
    width: 17%;
    text-align: center;
    cursor: pointer;
}
.alltab,.alltab .only{
    width: 100%;
    overflow: hidden;
    padding: 15px 0;
    font-size: 12px;
    color: #000000;
}
.alltab .only{
    border-bottom: 1px solid #d7d7d7;
}
.alltab .only .t1{
    line-height:60px;
}
.alltab .only .t2{
    height:60px;
    display: flex;
    align-items: center;
}
.alltab .only .t3{
    height:60px;
    display: flex;
    align-items: center;
    justify-content: center;
}





</style>

