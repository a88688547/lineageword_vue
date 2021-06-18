import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList : [
      {
        name:"首頁",
        path:"home",        
        },
      {
      name:"伺服器介紹",
      path:"serverSrtting",
      children:[
        {name:"悠風簡易官網",
        path: "officialWebsite",
        url:"http://lineageword.servegame.com/linweb/"
        },
        {name:"腳色刪除時間",
        path: "deleteTime"
        },
        {name:"職業血量上限",
        path: "blood"
        },
        {name:"冷知識",
        path: "knowledge"
        },
        {name:"轉身獎勵",
        path: "turnAround"
        },
        {name:"護身符消耗數量",
        path: "amulet"
        },
      ]
      },
      {
      name:"娃娃相關",
      path:"doll",
      children:[
        {name:"打熊肉地點",
        path: "bearMeat"
        },
        {name:"魔法娃娃製作",
        path: "magicDoll_make"
        },
        {name:"友達娃娃自動掛",
        path: "youdaDoll"
        },
        {name:"火焰之子系列娃娃",
        path: "flame",
        url:"http://lineageword.servegame.com/linweb/magicdoll.html"
        },
        {name:"火子6號和15號之差異",
        path: "difference"
        },
        {name:"職業娃娃",
        path: "profession"
        },
        {name:"魔法娃娃",
        path: "magicDoll"
        },
      ]
      },
      {
      name:"團體活動",
      path:"activity",
      children:[
        {name:"無限大賽",
        path: "unlimited"
        },
        {name:"哈汀任務_介紹",
        path: "harding_info"
        },
        {name:"哈汀任務_獎勵",
        path: "harding_reward"
        },
      ]
      },
      {
      name:"裝備道具",
      path:"equipment",
      children:[
        {name:"飾品_各階級效果",
        path: "accessories"
        },
        {name:"魔法防禦統計",
        path: "magicDefense"
        },
        {name:"法師_回魔裝備",
        path: "manaRecovery",
        url:"https://m.gamer.com.tw/forum/Co.php?bsn=842&snB=4048024"
        },
        {name:"武器強化(+0~+14)",
        path: "weapons"
        },
        {name:"釣魚飾品",
        path: "fishing"
        },
        {name:"武器屬性強化",
        path: "attributes"
        },
      ]
      },
      {
      name:"龍團副本",
      path:"dragon",
      children:[
        {name:"龍團基本門檻/介紹",
        path: "dragon_info"
        },
        {name:"龍痕狀態說明",
        path: "dragon_status"
        },
        {name:"龍副本_強度說明",
        path: "dragon_str"
        },
        {name:"龍之鑰匙",
        path: "dragon_key"
        },
      ]
      },
      {
      name:"努力賺錢",
      path:"makeMoney",
      children:[
        {name:"推文獎勵 (強化保護卷)",
        path: "important",
        hot:true,
        url:"http://lineageword.servegame.com/L1Web/Discuss?s=2640"
        },
        {name:"賺錢_魅力妖精",
        path: "makeMoney_goblin"
        },
      ]
      },
      {
      name:"練功相關",
      path:"levelUp",
      children:[
        {name:"各職業配點",
        path: "points",
        hot:true
        },
        {name:"數值模擬器",
        path: "simulation",
        url:"http://play.youbefun.com/characters_ro.html"
        },
        {name:"召喚&寵物說明    (法師、妖精)",
        path: "summon"
        },
        {name:"裂痕時間",
        path: "crack"
        },
        {name:"智多星任務",
        path: "ZhiDuoXing"
        },
        {name:"便宜買水",
        path: "waterBuy"
        },
        {name:"反擊屏障傷害",
        path: "counterattack"
        },
      ]
      },
      {
      name:"其他",
      path:"other",
      children:[
        {name:"自動釣魚",
        path: "fishing_auto"
        },
        {name:"藥水延遲",
        path: "potion",
        url:"https://m.gamer.com.tw/forum/Co.php?bsn=00842&snB=4533550"
        },
        {name:"手機遠端天堂",
        path: "remote"
        },
        {name:"記憶座標_顏色代碼",
        path: "coordinate_color"
        },
        {name:"稱號_顏色代碼",
        path: "title_color"
        },
        {name:"料理介紹",
        path: "food_info",
        },
        {name:"料理製作",
        path: "food_make"
        },
        {name:"看不到盟輝",
        path: "logo"
        },
        {name:"特珠變身",
        path: "transform"
        },
        {name:"查詢自身IP",
        path: "search_IP",
        url:"https://www.whatismyip.com.tw"
        },
      ]
      },
  ],
  password:"",
  isShowLogin:true
  },
  mutations: {
    update_password(state,data){
      state.password = data
    },
    update_isShowLogin(state,data){
      state.isShowLogin = data
    },
  },
  actions: {
    update_password({commit},data){
      commit("update_password",data)
    },
    update_isShowLogin({commit},data){
      commit("update_isShowLogin",data)
    },
  },
  modules: {
  }
})
