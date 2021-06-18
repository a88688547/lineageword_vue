<template>
  <div class="out">
    <login v-if="isShowLogin"></login>
    <div v-else class="background">
       <div class="title">悠風天堂 ~</div>

        <navbar></navbar>

        <div class="main">
          <div class="pageTitle_box">
            <div class="pageTitle">
              {{this.$route.name}}
            </div>
          </div>
          <router-view></router-view>
        </div>
        <div class="background_img">
        </div>
    </div>
  </div>
</template>

<script>
import navbar from './components/navBar.vue'
import login from './page/login.vue'



export default {
  Vue:this,
  components:{
    navbar,
    login
  },

  data(){
    return{
      
    }
  },
  methods:{
    // 轉換現在時間
     handleGetTime(fmt) {
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
      },
      // 判斷是否登入過
      checkLigon(){
        if(localStorage.getItem("date") && localStorage.getItem("date") === this.handleGetTime('MMdd')){
          this.$store.dispatch("update_isShowLogin",false)
        }
      }
  },
  computed:{
    password(){
      return this.$store.state.password
    },
    isShowLogin(){
      return this.$store.state.isShowLogin
    }
  },
  created(){
  },
  mounted(){
    let x = this.handleGetTime('MMdd')
    this.$store.dispatch("update_password",x )
  }
  
}

</script>

<style scoped src="./assets/css/reset.css"></style>

<style scoped>

.out{
  width: 100%;
  height: 100%;
}

.background{
  display: block;
  background-image: url("assets/images/D035_1200.jpg");
  max-height: 100%;
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  opacity: 0.8; 
  min-height: 650px;
  position: fixed;
  top: 0;
  left: 0;
}

.background_img{
  /* background-image: url("assets/images/D035_1200.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0.8;
  z-index: -1; */
}

.title{
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  }

  .main{
    height: 100%;
    z-index: -1;
    margin: 20px auto;
    background-color: rgb(252, 252, 252);
    width: 80vw;
    max-height: 80vh;
    opacity: 0.9;
    position: relative;
    padding: 10px 10px;
  }

  .pageTitle_box{
    font-size: 30px;
    color: brown;
    font-weight: bold;
    text-align: center;
    margin: 0px auto 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pageTitle {
    /* border: rgb(223, 71, 71) 1px solid; */
    /* padding: 5px 20px; */
  }

</style>

<style>

*{
  box-sizing: border-box;
}

/* img{
  max-width: 100%;
  max-height: 100%;
} */

body{
  padding: 0 0 ;
  margin: 0 0;
  width: 100%;
  height: 100%;
}

html{
  width: 100%;
  height: 100%;
}



</style>



