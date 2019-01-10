<template>
  <div class="permissionsSuper">
    <!-- 管理权限 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item v-for="(item,i) of navName" :index="i+''" :key="item.index">{{item}}</el-menu-item>
    </el-menu>
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>企业设置</el-breadcrumb-item>
          <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <!-- 左侧tree控件 -->
    <div class="permissionsSuper_content">
      <div class="permissionsSuper_title_tree">
        <ul>
          <li>
            管理组
          </li>
          <li class="active">
            <img src="../../assets/personage.png" alt>
            <span>超级管理员</span>
            <p>系统分组</p>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <!-- 右侧主体部分 -->
      <div class="permissionsSuper_title_right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // nav导航栏数据
      navName: ["管理权限"],
      activeIndex: "0",
      superAdmin: "",
      admin: "",
      // 表单数据
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 编辑功能
    //后台数据来源
  }
};
</script>
<style scoped src="../../../public/css/permissionsBase.css"></style>
<style scoped>
/* 管理权限 */
div.permissionsSuper_title_tree {
  width: 15%;
  height: 100%;
  border-right: 1px solid #d7d7d7;
  text-align: center;
  height: 1000px;
}
/* 左侧tree控件 */
div.permissionsSuper_title_tree p {
  color: #666666;
  margin-top: 10px;
  margin-bottom: 10px;
}
div.permissionsSuper_title_tree li {
  padding-top: 20px;
  padding-bottom: 20px;
}
div.permissionsSuper_title_tree li.active {
  background: #f2f2f2;
}
div.permissionsSuper_title_tree p {
  font-size: 12px;
}
div.permissionsSuper_content {
  display: flex;
  justify-content: space-between;
}
div.permissionsSuper_title_right {
  width: 85%;
}
div.el-breadcrumb{
  padding:10px;
  border-bottom: 1px solid #D7D7D7;
}
</style>
