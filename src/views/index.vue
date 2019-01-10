<style scoped>
.app{
  /* width: 100%; */
  min-height: 100vh;
  background-color:#f0f0f0;
}
/* .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  } */
/* 管理部分 */
  .managebox{
      width: 100%;
      height: 93px;
      margin-top:18px;
  }
  .managebox .lft{
      width: 16%;
      height: 93px;
      float: left;
      text-align: center;
  }
  .managebox .lft h1{
      color: #000000;
      font-size: 18px;
      margin-top: 20px;
      font-weight: normal;
  }
  .managebox .lft p{
      color: #282828;
      font-size: 12px;
      margin-top: 15px;
  }
  .managebox .lft p span{
      color: #ff0000;
      margin-right: 10px;
  }
  .managebox .rit{
      width: 84%;
      height: 93px;
      float: right;
  }
.managebox .rit .oltab{
      width: 138px;
      height: 91px;
      border:1px solid #666666;
      float: right;
      margin-right: 30px;
      text-align: center;
      line-height: 91px;
}
.managebox .rit .oltab p{
    color: #000;
      font-size: 12px;
}
.managebox .rit .oltab.red{
    background: #990000;
}
.managebox .rit .oltab.blue{
    background: #2881f0;
}
.managebox .rit .oltab.green{
    background: #006633;
}
.managebox .rit .oltab.grey{
    background: #bcbcbc;
}
.managebox .rit h1{
    color: #000;
    font-size: 18px;
    line-height: 93px;
    float: right;
    margin-right: 30px;
    font-weight: normal;
}
.mainside{
    width: 100%;
    overflow: hidden;
    border-top:1px solid #bcbcbc;
}
.mainside .lftbox{
    width: 16%;
    float: left;
    overflow: hidden;
    border-right:1px dashed #bcbcbc;

}
.mainside .lftbox ul{
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
}
.mainside .lftbox ul li{
    widows: 100%;
    height: 80px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: #d4e6fc;
}
.mainside .lftbox ul li.active{
    background: #2881f0;
}
.mainside .lftbox ul li img{
    width: 38px;
    height: 38px;
    margin:0 10px 0 20px;
}
.mainside .lftbox ul li p{
    font-size: 16px;
    color: #000;
}
.mainside .ritbox{
    width: 83%;
    float: left;
    overflow: hidden;
}
.mainside .ritbox .total{
    width: 91%;
    height: 50px;
    line-height: 50px;
    margin: 18px auto 0 auto;
    text-align: center;
    font-size: 16px;
    color: #000;
    border-bottom: 1px solid #bcbcbc;
}
.mainside .ritbox .alltb{
    width: 91%;
    overflow: hidden;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
}
.mainside .ritbox .alltb tr{
    width:100%;
    height: 60px;
}
.mainside .ritbox .alltb tr td{
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #bcbcbc;
    font-size: 12px;
    color: #000;
}
.mainside .ritbox .alltb tr td p{
    color: #2881f0;
}
.mainside .ritbox .alltb tr td i{
    color: #ff0000;
    margin-right: 10px;
}
.mainside .ritbox .msgbox{
    width: 91%;
    overflow: hidden;
    margin: 0 auto;
}
.mainside .ritbox .msgbox h1{
    font-size: 16px;
    color: #000;
    line-height: 42px;
    font-weight: normal;
}
  
</style>

<template>
<div class="app">
  <div class="managebox">
        <div class="lft">
            <h1>中午好，管理员！</h1>
            <p><span>new</span>您有9条消息</p>
        </div>
        <div class="rit">
            <div class="oltab red">
                <router-link to="">
                    <p>安全中心</p>
                </router-link>
            </div>
            <div class="oltab blue">
                <router-link to="">
                    <p>行程查看</p>
                </router-link>
            </div>
            <div class="oltab green">
                <router-link to="">
                    <p>名人名言管理</p>
                </router-link>
            </div>
            <div class="oltab grey">
                <router-link to="">
                    <p>行程管理</p>
                </router-link>
            </div>
            <h1>快捷应用入口</h1>
        </div>
    </div>
    <div class="mainside">
        <div class="lftbox">
            <ul>
                <li class="active">
                    <img src="../assets/indexnav1.jpg" alt="">
                    <p>所有</p>
                </li>
                <li>
                    <img src="../assets/indexnav2.jpg" alt="">
                    <p>办公应用中心</p>
                </li>
                <li>
                    <img src="../assets/indexnav3.jpg" alt="">
                    <p>领导行程</p>
                </li>
                <li>
                    <img src="../assets/indexnav4.jpg" alt="">
                    <p>安全中心</p>
                </li>
                <li>
                    <img src="../assets/indexnav5.jpg" alt="">
                    <p>名人名言</p>
                </li>
                <li>
                    <img src="../assets/indexnav5.jpg" alt="">
                    <p>名人名言</p>
                </li>
                <li>
                    <img src="../assets/indexnav5.jpg" alt="">
                    <p>名人名言</p>
                </li>
            </ul>
        </div>
        <div class="ritbox">
            <div class="total">全部<i class="el-icon-arrow-down"></i></div>
            <table class="alltb">
                <tr>
                    <td>小猫</td>
                    <td><i class="el-icon-warning"></i>提交了关于***领导的会议议程，现在需要进行审核，请审核下</td>
                    <td>
                        <router-link to=""><p>去审批</p></router-link>   
                    </td>
                    <td>5分钟前</td>
                </tr>
                <tr>
                    <td>大毛</td>
                    <td><i class="el-icon-warning"></i>关于***领导的行程已经通过初审，现在需要进行最终审核确认</td>
                    <td>
                        <router-link to=""><p>去审批</p></router-link>   
                    </td>
                    <td>6小时前</td>
                </tr>
                <tr>
                    <td>管理员</td>
                    <td>管理员于12月16日将你添加为【领导行程】的管理员，现在去管理吧</td>
                    <td>
                        <router-link to=""><p>去管理</p></router-link>   
                    </td>
                    <td>5天前</td>
                </tr>
                <tr>
                    <td>系统消息</td>
                    <td>今天已经是周五，下周的名人名言还没有更新，请更新</td>
                    <td>
                        <router-link to=""><p>去更新</p></router-link>   
                    </td>
                    <td>2018-12-27 15:20</td>
                </tr>
                <tr>
                    <td>系统消息</td>
                    <td>管理员在10月26日将你加入到领导行程业务单元里，请注意熟悉你负责的业务</td>
                    <td>
                        <router-link to=""><p>【查看详细】</p></router-link>   
                    </td>
                    <td>2018-12-27 15:20</td>
                </tr>
                <tr>
                    <td>系统消息</td>
                    <td>本周工作时长统计（2019年3月1日-2019年3月7日）</td>
                    <td>
                        <router-link to=""><p>【查看详细】</p></router-link>   
                    </td>
                    <td>2018-12-27 15:20</td>
                </tr>
                 <tr>
                    <td>系统消息</td>
                    <td>领导行程业务单元周工作统计（2019年3月1日-2019年3月7日）</td>
                    <td>
                        <router-link to=""><p>【查看详细】</p></router-link>   
                    </td>
                    <td>2018-12-27 15:20</td>
                </tr>
            </table>
            <div class="msgbox">
                <h1>1、将系统内的所有消息通知以人的口吻发出，而不是冷冰冰的系统消息；</h1>
                <h1>2、将系统内每个业务板块需要做的事情都是进行智能提醒，实现系统追人办事；</h1>
                <h1>3、化繁为简，整个系统后台是更好的去为智能助手服务的，能够将用户当前或接下来需要处理的事宜自动化提醒；如果没有任何需要处理事宜，则相关用户都不用进入到应用里面去；</h1>
                <h1>4、消息提醒以及智能助手的行程提醒都可以和微信服务号或者企业微信相关联绑定，实现移动端的实时提前提醒。</h1>
            </div>
        </div>    
    </div>

</div>


</template>
   
<script>

export default {
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
   
  }
};
</script>

