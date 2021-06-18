import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// 每次切換頁面時 判斷是否有 登入過期or沒有登入
router.beforeEach((to, from, next) => {
  // console.log(this.$store.state.password)
  if(localStorage.getItem("date") && localStorage.getItem("date") === handleGetTime('MMdd')){
    next()
  }else{
    store.dispatch("update_isShowLogin",true)
  }
})
// 轉換日期
function handleGetTime (fmt) {
  const date = new Date();
  const o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小時
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" +  k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" +  o[k]).substr(("" + o[k]).length)));
  return fmt;
  }