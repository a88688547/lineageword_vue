<template>
  <div class="black">
    <div class="box">
        <div class="tips">
            提示: 今天天氣如何 ?!
        </div>
        <div class="password_box">
            <label for="password" :class="{passwoed_err:error}">密碼 :</label><input v-model="password" type="text" name="password" id="password" @keyup.enter="login">
        </div>
        <div>
            <span v-if="error" class="err">你最好在想一想~~~</span>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'



export default {
  
  data(){
      return {
          password:"",
          error:false
      }
  },
  methods:{
      login(){
          console.log("rex")
          if(this.password === this.text){
              this.$store.dispatch("update_isShowLogin",false)
              localStorage.setItem("date",this.password)
          }else{
              this.error = true
          }
      },
       checkLigon(){
        if(localStorage.getItem("date") && localStorage.getItem("date") === this.handleGetTime('MMdd')){
          this.$store.dispatch("update_isShowLogin",false)
        }

  },
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
 
  },
   computed:{
      text(){
           return this.$store.state.password
      }
  },
  created(){
    //    this.checkLigon()
    //    console.log(localStorage.getItem("date"))
      },
      mounted(){
        this.checkLigon()
      }
  
}

// handleGetTime('yyyy-MM-dd hh:mm:ss'); //在這裡指定格式
</script>

<style scoped>

.black{
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}

.box{
    height: 500px;
    width: 700px;
    background-color: #fff;
    border: brown 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

label{
    margin-right: 30px;
}

.tips{
    color: crimson;
    font-weight: bold;
    margin-bottom: 30px;
}

.err{
    color: red;
    font-size: 36px;
    font-weight: bold;
}

.password_box{
    margin-bottom: 40px;
}

.passwoed_err{
    color: red;
     font-weight: bold;
}

</style>

