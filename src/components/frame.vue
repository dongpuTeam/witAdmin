<style  scoped>
.el-container {
  width: 100%;
  background-color: #f0f0f0;
}
/* header */
.el-header {
  background: url(../assets/schedule_banner.png) no-repeat;
  background-size: 100% 100%;
  color: #fff;
  padding-left: 80px;
  line-height: 2.5em;
}
.elheader-hd {
  width: 120px;
  height: 120px;
  margin-right: 40px;
}

/* main */
.el-main {
  padding-top: 0;
}

/* menu */
.el-menu {
  padding-left: 20px;
}

/* items */
.items {
  width: 100%;
  margin-top: 20px;
  min-height: 700px;
  background-color: #fff;
  padding: 0 20px 100px 20px;
}

.tab{
  height: 100%;
  padding:0 20px;
  display: block;
}
</style>

<template>
  <el-container>
    <!-- header -->
    <el-header class="flex align-center" height="172px">
      <img class="elheader-hd" :src="frameTop.userImg" alt="logo">
      <div class="elheader-bd">
        <h2>{{frameTop.title}}</h2>
        <p>{{frameTop.subtitle}}</p>
      </div>
    </el-header>

    <!-- main -->
    <el-main>
      <!-- menu -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item v-for="(item,index) in menus" :key="index" :index="index+''">
          <router-link class="tab" :to="{name:item.link}">
             {{item.name}}
          </router-link>
        </el-menu-item>
      </el-menu>

     
      <div class="items">
        
        <div class="item">
          <router-view></router-view>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
   
<script>
export default {
  name: "comframe",
  props: {
    menus:Array,
    frameTop:Object,
    defaultActive:Number
  },
  data(){
    return{
      activeIndex:'0'
    }
  },
 
//   activated() {},
//   created() {},
//   mounted() {},
//   computed: {},
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      this.$emit('my-tabKey',key);
    }
  }
};
</script>

