
<template>
<div class="app">

    <div class="topnav">
         <div @click="back" class="goback">
             <i class="el-icon-d-arrow-left"></i>
             返回
         </div>
         <p>创建应用</p>
    </div>
    <div class="mainside">
        <el-form :model="createForm" :rules="createrules" ref="createForm" label-position="top" class="demo-ruleForm">
            <div class="scimgbox">
                <el-form-item label="应用logo">
                    <el-upload class="avatar-uploader sendimg" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="createForm.imageUrl" :src="createForm.imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <p>建议使用750*750,1M以内的jpg、png图片</p>
            </div>
            
            <el-form-item label="应用名称" prop="name">
                <el-input type="text" v-model="createForm.name"></el-input>
            </el-form-item>
            <el-form-item label="应用介绍（选填）" prop="introduce">
                <el-input type="text" v-model="createForm.introduce"></el-input>
            </el-form-item>
            <el-form-item label="业务可见范围">
                <p>选择部门/成员</p>
                <div class="switchbox">
                    <p>应用在导航栏展示</p>
                    <el-switch v-model="createForm.switch1" active-color="#13ce66" inactive-color="#dcdfe6">
                    </el-switch>
                </div>
                <div class="switchbox">
                    <p>应用在快捷导航栏展示</p>
                    <el-switch v-model="createForm.switch2" active-color="#13ce66" inactive-color="#dcdfe6">
                    </el-switch>
                </div>
                <div class="switchbox">
                    <p>允许应用推送消息</p>
                    <el-switch v-model="createForm.switch3" active-color="#13ce66" inactive-color="#dcdfe6">
                    </el-switch>
                </div>
                <div class="switchbox">
                    <p>是否在首页模块展示</p>
                    <el-switch v-model="createForm.switch4" active-color="#13ce66" inactive-color="#dcdfe6">
                    </el-switch>
                </div>
                <div class="checkbox">
                    <p>应用类型</p>
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="数据对接"></el-checkbox>
                        <el-checkbox label="页面嵌入"></el-checkbox>
                        <el-checkbox label="功能入口"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <h6 class="prompt">选择后，该应用具有相应的权限</h6>
            </el-form-item>
            <el-form-item>
                <el-button class="submitbtn" type="primary" @click="submitForm('createForm')">创建应用</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>


</template>
   
<script>

export default {
  data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入应用名称！'));
        } else {
          callback();
        }
      };
      return {
        activeIndex:'1',
        createForm: {
          imageUrl: '',
          name: '',
          introduce: '',
          switch1:true,
          switch2:false,
          switch3:true,
          switch4:true,
        },
        createrules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ]
        },
        
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
    // 上传图片
      handleAvatarSuccess(res, file) {
        this.createForm.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
       //登录
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
    //   返回
    back(){
        this.$router.back();
    }
  }
};
</script>
<style scoped>
.app{
  /* width: 100vw;
  height: 100vh; */
  background-color:#fff;
}
a{text-decoration:none;}
li{list-style: none;}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .header{
      width: 100%;
      height: 60px;
      background: #bcbcbc;
  }
  .header .logo{
      height: 60px;
      float: left;
      margin-left: 20px;
  }
  .header .logo img{
      widows: 43px;
      height: 43px;
      margin: 8px 25px 0 0;
      float: left;
  }
  .header .logo p{
      float: left;
      color: #000000;
      font-size:18px;
      line-height: 60px;
  }
  .headnav{
      background: #bcbcbc;
      position: unset;
      float: left;
      margin-left: 50px;
  }
  .header .outlogin{
      color: #202229;
      font-size: 12px;
      line-height: 60px;
      float: right;
      margin-right: 50px;
  }
  .header .manager{
      color: #2881f0;
      font-size: 16px;
      line-height: 60px;
      float: right;
      margin-right: 50px;
  }
  .header .reload{
      width:70px;
      height: 60px;
      float: right;
      margin-right: 50px;
      text-align: center;
      cursor: pointer;
  }
  .header .reload img{
      width: 25px;
      height: 25px;
      margin-top: 5px;
  }
  .header .reload p{
      color: #000000;
      font-size: 12px;
      line-height: 28px;
      margin: 0;
      padding: 0;
  }
  .topnav{
      width:1200px;
      height: 44px;
      padding:5px 0;
      margin:20px auto;
      background: #c9c9c9;
      position: relative;
  }
  .topnav .goback{
      width:80px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      font-size: 12px;
      color: #000000;
      background: #e4e4e4;
      border: 1px solid #bcbcbc;
      border-radius:4px;
      position: absolute;
      top:6px;
      left:20px;
  }
  .topnav .goback i{
      color: #959595;
      margin-right: 5px;
  }
 .topnav p{
     font-size: 15px;
     color: #000000;
     text-align: center;
     line-height: 34px;
 }
 .mainside{
     width:406px;
     overflow: hidden;
     margin: 0 auto;
 }
 /* 上传图片 */
 .scimgbox{
     width: 100%;
     overflow: hidden;
     display: flex;
     /* flex-wrap: wrap; */
     justify-content: space-between;
     align-items: center;
 }
 .scimgbox p{
     font-size:12px;
     color: #797979;
 }
 .sendimg .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .sendimg .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .switchbox{
    width:100%;
    height: 46px;
    line-height: 46px;  
    border-top:1px solid #aeaeae;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .switchbox p,.checkbox p{
    font-size: 12px;
    color: #000000;
  }
  .checkbox{
    width: 100%;
    height: 46px;
    line-height: 46px;   
    border-top:1px solid #aeaeae;
    display: flex;
    flex-wrap: wrap;
  }
  .checkbox p{
    margin-right: 20px;  
  }
  h6.prompt{
    font-size: 12px;
    color: #5e5e5e;
    line-height: 22px;
    font-weight: normal;
    text-align: center;
  }
  .submitbtn{
      width: 100%;
  }
</style>

