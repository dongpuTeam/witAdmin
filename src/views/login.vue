<style scoped>
.app{
  /* width: 100vw;
  height: 100vh; */
  background-color:#f0f0f0;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .main{
      width: 510px;
      padding: 0 42px;
      height: 410px;
      border: 1px solid #666;
      border-radius: 3px;
      margin: 25px auto;
      background: #fff;
  }
  .tabs{
      widows: 100%;
      height: 50px;
      margin-bottom: 18px;
  }
  .tabs div{
      display: inline-block;
      float: left;
      padding: 0 5px;
      height:45px;
      line-height:45px;
      border-bottom: 5px solid #fff;
      margin-right: 40px;
      font-size: 18px;
      color: #000;
      cursor: pointer;
  }
  .tabs div.active{
      color: #2881F0;
      border-bottom: 5px solid #2881F0;
  }
.el-form-item{
     position: relative;
      width: 100%;
      height: 54px;
      border: 1px solid #C9C9C9;
      border-radius: 5px;
}
.el-form-item__content{
    height: 54px;
    line-height: 54px;
}
  .el-input{
      height: 52px;
    line-height: 52px;
  }
  .el-input.yzm{
      width: 70%; 
      float: left;
  }
  .el-input__inner{
      width:100%;
      height:98%;
      border:none;
  }
  .el-form-item__content p{
      float: right;
      padding: 0 10px;
      color: #2881F0;
      font-size: 17px;
      cursor: pointer;
  }
  .el-button{
      width: 100%;
      height: 54px;
  }
  .el-checkbox{
      margin-bottom: 20px;
  }
  h6{
      font-size: 14px;
      color:#434343;
      text-align: center;
      font-weight: normal;
      margin-top: 100px;
  }
</style>

<template>
<div class="app">
    <div class="main">
        <div class="tabs">
            <div :class="{active:tab == 1}" @click="tab = 1">登录</div>
            <div :class="{active:tab == 2}" @click="tab = 2">注册</div>
        </div>
        <div v-show="tab==1">
            <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1" class="demo-ruleForm">
                
                <el-form-item prop="phone">
                    <el-input type="text" v-model="ruleForm1.phone" placeholder="请输入您的账户关联手机号"></el-input>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input type="text" v-model="ruleForm1.pass" placeholder="请输入短信验证码" class="yzm"></el-input>
                    <p @click="sendCode">{{tip}}</p>
                    
                </el-form-item>
                <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm1')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div v-show="tab==2">
            <h6>请联系****部门填写申请单进行系统账号申请</h6>
        </div>
    </div>

</div>


</template>
   
<script>
import { validateMobile } from "../plugins/validate.js";
  export default {
    data() {
        var validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        }else if(!validateMobile(value)) {
            callback(new Error('手机号格式不正确'));
        }else{
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else {
          callback();
        }
      };
      return {
        tab:1,
        checked: true,
        send: true,
        time: 10,
        ruleForm1: {
          phone: '',
          pass: '',
        },
        rules1: {
          phone: [
            { validator: validatePhone, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      //获取验证码
    sendCode() {
        let mobile = this.ruleForm1.phone;
        if(this.send ==true){
            if (mobile=='') {
                this.$message.error('请输入手机号');
                return;
            }else if (!validateMobile(mobile)) {
                this.$message.error('手机号格式不正确');
                return;
            }else{
                this.send =false;
                let timer = setInterval(() => {
                    if(this.time > 1){
                        this.time--;
                    }else {
                        clearInterval(timer);
                        this.send =true;
                        this.time = 10;
                    }
                },1000)
            }
            
        }
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
    },
    computed: {
        tip: function() {
            return this.send ?  '获取验证码' : this.time + 's后重发';
        }
    },
  }
  
</script>
