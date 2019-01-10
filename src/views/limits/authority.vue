<template>
  <div class="permissions_details">
    <el-form ref="form" :model="form" label-width="80px" label-position="left">
      <!-- 管理组名 -->
      <el-form-item label="管理组名">
        <el-input v-model="form.name" placeholder="行程管理组"></el-input>
      </el-form-item>
      <!-- 管理员 -->
      <el-form-item label="管理员">
        <el-button type="gray" size="mini" v-for="item of form.administrator" :key="item.index">
          <img class="permissions_details_img" :src="item.img" alt="">
          {{item.adminName}}
        </el-button>
        <!-- 编辑增删改查 -->
        <p class="pointer">编辑</p>
      </el-form-item>
      <!-- 应用权限 -->
      <el-form-item label="应用权限">
        <el-button type="gray" size="mini" v-for="item of form.application" :key="item.index">
          <img class="permissions_details_img" :src="item.img" alt>
          {{item.appPermissions}}
        </el-button>
        <p class="pointer">编辑</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini">保存</el-button>
        <el-button type="gary" size="mini">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        //   管理组名称
        name: "行程管理组",
        // 管理员
        administrator: [
          {
            img: require("../../assets/personage.png"),
            adminName: "大猫"
          },
          {
            img: require("../../assets/personage.png"),
            adminName: "小毛"
          }
        ],
        // 应用权限
        application: [
          {
            img: require("../../assets/personage.png"),
            appPermissions: "行程管理"
          },
          {
            img: require("../../assets/personage.png"),
            appPermissions: "办公应用"
          },
          {
            img: require("../../assets/personage.png"),
            appPermissions: "名人名言"
          },
          {
            img: require("../../assets/personage.png"),
            appPermissions: "banner图管理"
          },
          {
            img: require("../../assets/personage.png"),
            appPermissions: "安全中心"
          },
          {
            img: require("../../assets/personage.png"),
            appPermissions: "股票信息"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped src="../../../public/css/permissionsBase.css"></style>
<style scoped>
div.el-form-item {
    border-bottom: 2px solid #666666;
    margin: 0px;
    padding: 10px;
}
</style>
