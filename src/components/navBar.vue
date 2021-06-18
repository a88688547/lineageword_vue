<template>
    <div class="navbar_box">
        <ul class="navbar">
            <li class="navbar_title" :class="{selected_navbar_title: nowPageType === item1.path}" v-for="item1 in navList" :key="item1.path" @click.stop="changePage(item1)">{{item1.name}}
                <ul v-if="item1.children" class="navbar_list">
                    <li class="navbar_list_title" :class="{selected_list_title: $route.name === item2.name}" v-for="item2 in item1.children" :key="item2.path" @click.stop="changePage2(item1,item2)">
                        {{item2.name}}
                        <img v-if="item2.hot" class="hot_img" src="../assets/images/hot2.gif" alt="hot">
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    computed:{
        navList () {
            return this.$store.state.navList
        },
        nowPageType(){
            let name = this.$route.path.split("/")[1]
            return name
        }
    },
    methods:{
        changePage(data){
            console.log(data)
            console.log(this.$route.name,data.name)
          
             if(data.name === "首頁" && this.$route.name !== data.name){
                this.$router.push("/home")
            }
        },
        changePage2(data1,data2){
            if(data2.url){
                window.open(data2.url)
                return
            }
            console.log(this.$route.name)
            if(this.$route.name !== data2.name){
                this.$router.push({name:data2.name})
            }
        }
    }
}
</script>

<style scoped>

a, a:hover, a:visited, a:link, a:active {
    color:#000;
    text-decoration:none;
    outline: none;
    
}

.navbar_box{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(110, 109, 109);
    opacity: 0.9;
    z-index: 10;
}

.navbar{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    background-color: rgb(168, 168, 168);
    list-style:none;
    padding: 0 0;
}

.navbar_title{
    position: relative;
    width: 160px;
    text-align: center;
    padding: 5px 0 ;
    font-weight: bold;
    cursor: pointer;
    border-right: 1px solid black;
}

.navbar_title:last-child{
    border-right: 0px;
}

.navbar_title:hover{
    background-color: rgb(238, 159, 85);
}

.navbar_title:hover .navbar_list{
    display: block;
}


.navbar_list{
    width: 100%;
    position: absolute;
    /* display: flex; */
    display: none;
    list-style:none;
    top: 31px;
    left: 0;
    flex-direction: column;
    padding: 0 0;
    text-align: center;
    background-color: #fff;
    font-weight: 500;
    z-index: 99;
}

.navbar_list_title{
 position: relative;
  list-style:none;
  padding: 5px 0 ;
  cursor: pointer;
  border-bottom: 1px solid black;
    z-index: 99;

}

.navbar_list_title:last-child{
  border-bottom: 0px;
}

.navbar_list_title > a:hover{
    color: rgb(192, 81, 40);
}

.navbar_list_title:hover{
    background-color: burlywood;
    color: rgb(192, 81, 40);
    font-weight: bold;
}

.hot_img{
    position: absolute;
    top: -10px;
    right: -20px;
}

.selected_list_title{
    background-color: burlywood;
    color: rgb(192, 81, 40);
    font-weight: bold;
}

.selected_navbar_title{
    background-color: rgb(238, 159, 85);
}


</style>