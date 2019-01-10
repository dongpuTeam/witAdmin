<style  scoped>

</style>

<template>
    <div class="wrap">
        <com-frame @my-tabKey="getTabKey" :frameTop="frameTop" :menus="menus">
        </com-frame> 
    
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
                name: "议题库",
                link: "issues"
            },
             {
                name: "领导行程",
                link: "lead"
            },
            {
                name: "全年计划",
                link: "anual"
            },
            {
                name: "角色组管理",
                link: "role"
            },
            {
                name: "模板及审批流程管理",
                link: "approval"
            },
            {
                name: "报表统计",
                link: "form"
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

