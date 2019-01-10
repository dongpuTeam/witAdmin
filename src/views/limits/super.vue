<template>
  <div>
    <!-- 右侧主体部分 -->
    <div class="permissionsSuper_title_right">
      <p class="permissionsSuper_p">编辑超级管理员组</p>
      <el-form ref="form" :model="form" label-width="80px" label-position="left">
        <el-form-item label="管理员组">
          <el-row>
            <el-col :span="7">
              <el-input v-model="form.name" placeholder="超级管理员" class="border-radius"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 管理员 -->
        <el-form-item label="管理员">
          <el-button
            size="mini"
            v-for="(item,i) of form.administrator"
            :key="i"
            class="border-radius before"
          >
            <img class="permissions_details_img" :src="item.img" alt>
            {{item.adminName}}
            <i
              class="delete pointer"
              v-show="current"
              @click="permissionsDelete(i)"
            >
              <img src="../../assets/personage.png" alt>
            </i>
          </el-button>
          <span @click="compile()" class="pointer">编辑</span>
        </el-form-item>
        <el-form-item label="应用权限">
          <p>具有对所有应用的管理和操作权限</p>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" class="border-radius" @click="permissionsSave()">保存</el-button>
          <el-button type="gray" size="mini" class="border-radius" @click="permissionsCancel()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      form: {
        administrator: [
          {
            img: require("../../assets/personage.png"),
            adminName: "管理员1"
          },
          {
            img: require("../../assets/personage.png"),
            adminName: "管理员2"
          },
          {
            img: require("../../assets/personage.png"),
            adminName: "管理员3"
          },
          {
            img: require("../../assets/personage.png"),
            adminName: "管理员4"
          },
          {
            img: require("../../assets/personage.png"),
            adminName: "管理员5"
          },
          {
            img: require("../../assets/personage.png"),
            adminName: "管理员6"
          }
        ]
      }
    };
  },
  methods: {
    compile() {
      //点击编辑添加删除小图标
      this.current = !this.current;
    },
    //删除操作
    permissionsDelete(index) {
      this.form.administrator.splice(index, 1);
    },
    // 获取数据库的数据
    getlist() {
      this.$axios({
        method: "post",
        url: url,
        params: {
        //传参数
        }
      }).then(res => {

      });
    },
    //保存
    permissionsSave() {
      console.log(this.form);
      console.log("保存");
      this.$confirm("是否保存设置", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "保存成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },
    //取消
    permissionsCancel() {
      console.log("取消");
    }
  }
};
</script>
<style scoped src="../../../public/css/permissionsBase.css"></style>
<style scoped>
/* 右侧表单 */
div.el-form-item {
  border-bottom: 1px solid #d7d7d7;
  margin: 0px;
  padding: 10px;
}
div.el-form-item button.before {
  position: relative;
}
div.el-form-item i.delete {
  position: absolute;
  left: -5px;
  top: -10px;
}
div.el-form-item:first-child {
  border-top: 1px solid #d7d7d7;
}
p.permissionsSuper_p {
  margin: 20px;
}
/* button.before::before{
    content: url(../../../public/img/permissions/delete.png);
    position: absolute;
    top:-5px;
    left: -5px;
} */
</style>
