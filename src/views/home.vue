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
  
  .topnav{
      width: 1200px;
      height:40px;
      margin:10px auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
  }
  .el-menu--horizontal.typenav{
      border-bottom:none;
  }
  .el-menu--horizontal.typenav>.el-menu-item{
      color: #000;
      height: 40px;
      line-height: 40px;
  }
 .el-menu--horizontal.typenav>.el-menu-item.is-active{
      border-bottom:2px solid transparent;
      color: #2881f0;
 }
 .topnav .searchput{
      width: 330px;
      height: 40px;
 }
 .typepart{
     width: 1200px;
     margin: 0 auto;
     overflow: hidden;
     display: flex;
     flex-wrap: wrap;
 }
.typepart li{
    width: 235px;
    height: 268px;
    border:1px solid #949494;
    border-radius: 8px;
    margin:0 50px 30px 0;
    text-align: center;
    justify-content: center;
}
.typepart li img{
    width: 80px;
    height: 80px;
    margin: 40px 0 0 0;
}
.typepart li h1{
    color: #000;
    line-height: 40px;
    font-size: 15px;
    font-weight: normal;
}
.typepart li p{
    color: #000;
    line-height: 28px;
    font-size: 12px;
}
.typepart li .tomanage{
    display: block;
    width:104px;
    height: 23px;
    line-height: 23px;
    text-align: center;
    color:#2881f0;
    font-size:12px;
    border:1px solid #2881f0;
    border-radius: 4px;
    margin: 10px auto 0 auto;
}
.typepart li:nth-child(4n){
    margin-right:0;
}
.typepart li.add img{
    margin: 80px 0 0 0;
}
.typepart li.add h1{
    font-size: 18px;
}
</style>

<template>
<div class="app">
    <div class="topnav">
        <el-menu :default-active="activeIndex" class="el-menu-demo typenav" mode="horizontal">
            <el-menu-item index="1">全部</el-menu-item>
            <el-menu-item index="2">业务提醒类</el-menu-item>
            <el-menu-item index="3">系统配置类</el-menu-item>
            <el-menu-item index="4">功能使用类</el-menu-item>
            <el-menu-item index="5">数据查看类</el-menu-item>
        </el-menu>
        <el-input placeholder="输入你需要查看设置的模块" class="searchput" prefix-icon="el-icon-search" v-model="input21"></el-input>
    </div>
    <ul class="typepart">
        <li class="add">
            <router-link :to="{name:'addApp'}">
                <img src="../assets/yy1.jpg" alt="">
                <h1>添加新应用</h1>
                <p>只有管理员权限添加应用</p>
            </router-link>
        </li>
        <li v-for="(item,index) in apps" :key="index" >
            <img :src="item.imgsrc" alt="">
            <h1>{{item.title}}</h1>
            <p>{{item.content}}</p>
            <p>{{item.detail}}</p>
            <router-link class="tomanage" :to="{path:item.link}">进入管理设置</router-link>
        </li>
    </ul>
</div>


</template>
   
<script>
import imgadmin from "../assets/yy2.jpg";
import imgschedule from "../assets/yy6.jpg";
import imglimits from "../assets/yy3.jpg";

export default {
  data() {
      return {
        activeIndex:'1',
        input21:'',
        apps:[
          {
            title:'用户管理',
            content:'111',
            detail:'111',
            imgsrc:imgadmin,
            link:'/userright/index'
          },
          {
            title:'权限管理',
            content:'111',
            detail:'111',
            imgsrc:imglimits,
            link:'/limits/index'
          },
           {
            title:'行程主页',
            content:'111',
            detail:'111',
            imgsrc:imgschedule,
            link:'/schedule/index'
          },
        ]
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

