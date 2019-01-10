<style scoped>
.item-header {
  border-bottom: 2px solid #f0f0f0;
  padding: 20px 0;
}

/* item-body */
.item-body {
  padding: 20px 0;
  position: relative;
}
</style>

<template>
     <div v-show="show" class="wrap">
         <!-- header -->
        <div class="item-header flex align-center justify-between">
            <h5>领导行程</h5>
            <el-button @click="issueEditor" type="primary" plain class="item-header-btn1">编辑</el-button>
        </div>
     </div>
</template>
   
<script>

export default {
    name: "comIssue",
  componentName: "comIssue",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

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
    issueEditor(){
        // this.$emit('my-clickAddIssue');
    }
  }
};
</script>

