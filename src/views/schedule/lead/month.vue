<style scoped>
/* head */
.item-header {
  border-bottom: 2px solid #f0f0f0;
  padding: 20px 0;
}

.tab-item{

}
.tab-item-box{
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 5px;
}
</style>

<template>
  <div class="wrap">
   
    <!-- tab -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="0">全部行程</el-menu-item>
      <el-menu-item class="tab-item flex align-center" v-for="(item,index) in tabs" :key="index" :index="index+1+''">
          <div class="tab-item-box" :style="{ backgroundColor: item.color }"></div>
          <div class="tab-item-name">{{item.name}}</div>
        </el-menu-item>
    </el-menu>

  </div>
</template>
   
<script>
export default {
  data() {
    return {
      activeIndex: "0",
      tabs:[
          {
              name:'会议',
              color:'red'
          },
           {
              name:'调研',
              color:'pink'
          },
           {
              name:'活动',
              color:'green'
          },
           {
              name:'中央及部署',
              color:"blue"
          },
           {
              name:'专题汇报',
              color:'orange'
          },
            {
              name:'交流',
              color:'yellow'
          },
           {
              name:'来访及访问',
              color:'red'
          },
            {
              name:'全年规划',
              color:'blue'
          }
      ],
    };
  },

  activated() {},
  created() {},
  mounted() {},
  computed: {},
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
};
</script>

