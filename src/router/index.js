import Vue from 'vue'
import VueRouter from 'vue-router'
import activity from '../page/activity'
import harding_info from '../page/activity/harding_info.vue'
import harding_reward from '../page/activity/harding_reward.vue'
import unlimited from '../page/activity/unlimited.vue'
import doll from '../page/doll'
import bearMeat from '../page/doll/bearMeat.vue'
import difference from '../page/doll/difference.vue'
import magicDoll from '../page/doll/magicDoll.vue'
import magicDoll_make from '../page/doll/magicDoll_make.vue'
import profession from '../page/doll/profession.vue'
import youdaDoll from '../page/doll/youdaDoll.vue'
import dragon from '../page/dragon'
import dragon_info from '../page/dragon/dragon_info.vue'
import dragon_key from '../page/dragon/dragon_key.vue'
import dragon_status from '../page/dragon/dragon_status.vue'
import dragon_str from '../page/dragon/dragon_str.vue'
import equipment from '../page/equipment'
import accessories from '../page/equipment/accessories.vue'
import attributes from '../page/equipment/attributes.vue'
import fishing from '../page/equipment/fishing.vue'
import magicDefense from '../page/equipment/magicDefense.vue'
import weapons from '../page/equipment/weapons.vue'
import Home from '../page/Home.vue'
import levelUp from '../page/levelUp'
import counterattack from '../page/levelUp/counterattack.vue'
import crack from '../page/levelUp/crack.vue'
import points from '../page/levelUp/points.vue'
import summon from '../page/levelUp/summon.vue'
import waterBuy from '../page/levelUp/waterBuy.vue'
import ZhiDuoXing from '../page/levelUp/ZhiDuoXing.vue'
import makeMoney from '../page/makeMoney'
import makeMoney_goblin from '../page/makeMoney/makeMoney_goblin.vue'
import other from '../page/other'
import coordinate_color from '../page/other/coordinate_color.vue'
import fishing_auto from '../page/other/fishing_auto.vue'
import food_info from '../page/other/food_info.vue'
import food_make from '../page/other/food_make.vue'
import logo from '../page/other/logo.vue'
import remote from '../page/other/remote.vue'
import title_color from '../page/other/title_color.vue'
import transform from '../page/other/transform.vue'
import serverSrtting from '../page/serverSrtting'
import amulet from '../page/serverSrtting/amulet.vue'
import blood from '../page/serverSrtting/blood.vue'
import deleteTime from '../page/serverSrtting/deleteTime.vue'
import knowledge from '../page/serverSrtting/knowledge.vue'
import turnAround from '../page/serverSrtting/turnAround.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: '首頁',
    component: Home,
    hidden: true,
  },
  { 
    name:"伺服器介紹",
    path:"/serverSrtting",
      component: serverSrtting,
      hidden: true,
      children:[
      {
        name:"悠風簡易官網",
        path: "officialWebsite",
      },
      {
        name:"腳色刪除時間",
        path: "deleteTime",
        component: deleteTime,
      },
      {
        name:"職業血量上限",
        path: "blood",
        component: blood,
      },
      {name:"冷知識",
      path: "knowledge",
      component: knowledge,
      },
      {name:"轉身獎勵",
      path: "turnAround",
      component: turnAround,
      },
      {name:"護身符消耗數量",
      path: "amulet",
      component: amulet,
      },
    ]
    },
    {
    name:"娃娃相關",
    path:"/doll",
    hidden: true,
    component: doll,
    children:[
      {name:"打熊肉地點",
      path: "bearMeat",
      component: bearMeat,
  },
      {name:"魔法娃娃製作",
      path: "magicDoll_make",
      component: magicDoll_make,
  },
      {name:"友達娃娃自動掛",
      path: "youdaDoll",
      component: youdaDoll,
    },
      {name:"火焰之子系列娃娃",
      path: "flame",
    },
      {name:"火子6號和15號之差異",
      path: "difference",
      component: difference,
    },
      {name:"職業娃娃",
      path: "profession",
      component: profession,
    },
      {name:"魔法娃娃",
      path: "magicDoll",
      component: magicDoll,
    },
    ]
    },
    {
    name:"團體活動",
    path:"/activity",
    component: activity,
    hidden: true,
    children:[
      {name:"無限大賽",
      path: "unlimited",
      component: unlimited,
      },
      {name:"哈汀任務_介紹",
      path: "harding_info",
      component: harding_info,
      },
      {name:"哈汀任務_獎勵",
      path: "harding_reward",
      component: harding_reward,
      },
    ]
    },
    {
    name:"裝備道具",
    path:"/equipment",
    hidden: true,
    component: equipment,
    children:[
      {name:"飾品_各階級效果",
      path: "accessories",
      component: accessories,
      },
      {name:"魔法防禦統計",
      path: "magicDefense",
      component: magicDefense,
      },
      {name:"法師_回魔裝備",
      path: "manaRecovery",
     
      },
      {name:"武器強化(+0~+14)",
      path: "weapons",
      component: weapons,
      },
      {name:"釣魚飾品",
      path: "fishing",
      component: fishing,
      },
      {name:"武器屬性強化",
      path: "attributes",
      component: attributes,
      },
    ]
    },
    {
    name:"龍團副本",
    path:"/dragon",
    hidden: true,
    component: dragon,
    children:[
      {name:"龍團基本門檻/介紹",
      path: "dragon_info",
      component: dragon_info,
      },
      {name:"龍痕狀態說明",
      path: "dragon_status",
      component: dragon_status,
      },
      {name:"龍副本_強度說明",
      path: "dragon_str",
      component: dragon_str,
      },
      {name:"龍之鑰匙",
      path: "dragon_key",
      component: dragon_key,
      },
    ]
    },
    {
    name:"努力賺錢",
    path:"/makeMoney",
    hidden: true,
    component: makeMoney,
    children:[
      {name:"推文獎勵 (強化保護卷)",
      path: "important",
      hot:true,
      },
      {name:"賺錢_魅力妖精",
      path: "makeMoney_goblin",
      component: makeMoney_goblin,
      },
    ]
    },
    {
    name:"練功相關",
    path:"/levelUp",
    hidden: true,
    component: levelUp,
    children:[
      {name:"各職業配點",
      path: "points",
      hot:true,
      component: points,
      },
      {name:"數值模擬器",
      path: "simulation"
      },
      {name:"召喚&寵物說明    (法師、妖精)",
      path: "summon",
      component: summon,
      },
      {name:"裂痕時間",
      path: "crack",
      component: crack,
      },
      {name:"智多星任務",
      path: "ZhiDuoXing",
      component: ZhiDuoXing,
      },
      {name:"便宜買水",
      path: "waterBuy",
      component: waterBuy,
      },
      {name:"反擊屏障傷害",
      path: "counterattack",
      component: counterattack,
      },
    ]
    },
    {
    name:"其他",
    path:"/other",
    hidden: true,
    component: other,
    children:[
      {name:"自動釣魚",
      path: "fishing_auto",
      component: fishing_auto,
      },
      {name:"藥水延遲",
      path: "potion"
      },
      {name:"手機遠端天堂",
      path: "remote",
      component: remote,
      },
      {name:"記憶座標_顏色代碼",
      path: "coordinate_color",
      component: coordinate_color,
      },
      {name:"稱號_顏色代碼",
      path: "title_color",
      component: title_color,
      },
      {name:"料理介紹",
      path: "food_info",
      component: food_info,
      },
      {name:"料理製作",
      path: "food_make",
      component: food_make,
      },
      {name:"看不到盟輝",
      path: "logo",
      component: logo,
      },
      {name:"特珠變身",
      path: "transform",
      component: transform,
      },
      {name:"查詢自身IP",
      path: "search_IP"
      }
    ]}
   ,{ path: '/*', redirect: '/home'}
]

const router = new VueRouter({
  routes
})

export default router
