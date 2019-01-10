import Vue from 'vue'
import './plugins/axios.js'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store' //vuex
//import config from '../public/js/config.js' //请求地址

// 全局样式
import '../public/css/normalize.css' //初始化
import '../public/css/flex.css' // flex类

// 自定义组件
// 引入自定义组件。index.js是组件的默认入口
// import Loading from './components/loading'
// Vue.use(Loading);


Vue.config.productionTip = false


new Vue({
  router,
  // config,
  store,
  render: h => h(App)
}).$mount('#app')



/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})