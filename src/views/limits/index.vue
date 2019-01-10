<style  scoped>

</style>

<template>
    <div class="wrap">
        <com-frame @my-tabKey="getTabKey" :frameTop="frameTop" :menus="menus"></com-frame> 
    
    </div>
</template>
   
<script>
import comFrame from '../../components/frame'
import TopUserImg from '../../assets/user.png'


export default {
     components:{comFrame},
  data() {
    return {
        frameTop:{
            title:'领导行程管理',
            subtitle:'对领导行程进行管理、更新、审核',
            userImg:TopUserImg
        },
        menus: [
            {
                name: "权限管理",
                link: "limitsAdmin"
            }
        ],
        active:0
    };
  },

  activated() {},
  created() {

  },
  mounted() {},
  computed: {},
  methods: {
      getTabKey(key){
          this.active = key;
      }
  }
};
</script>

