<template>
  <div id="app">
    <!-- <el-menu
      :default-active="activeIndex"
      class="el-menu flex align-center"
      mode="horizontal"
      @select="handleSelect"
    >
      <h3 class="logo">智能助手总台</h3>
      <el-menu-item index="0">
        <router-link class="tab" :to="{name:'index'}">首页</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link class="tab" :to="{name:'home'}">应用中心</router-link>
      </el-menu-item>
    </el-menu>
    <div class="line"></div> -->

    <div class="header">
        <div class="logo">
            <img src="./assets/logo.jpg" alt="">
            <p>智能助手工作总台</p>
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo headnav" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
              <router-link class="tab" :to="{name:'index'}">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link class="tab" :to="{name:'home'}">应用中心</router-link>
            </el-menu-item>
        </el-menu>
        <router-link to="" class="outlogin">退出</router-link> 
        <router-link to="" class="manager">管理员</router-link>    
        <div class="reload">
            <img src="./assets/reload.jpg" alt="">
            <p>刷新按钮</p>
        </div>
    </div>

    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex:'1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.tab{
  height: 100%;
  padding:0 20px;
  display: block;
}
.el-menu{
  padding:0 20px;
}

.em-menu .el-menu-item{
  padding:0;
  margin-right: 20px;
} 



/* add */
/* add */
  a{text-decoration:none;}
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
</style>
