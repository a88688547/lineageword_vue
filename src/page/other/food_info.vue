<template>
    <div class="content">
        <h3 style="color: orchid;">By 小湊</h3>
        <div class="img_box">
            <img  src="../../assets/images/cookbook_1.jpg" alt="blood">
            <img  src="../../assets/images/cookbook_2.jpg" alt="blood">
            <img  src="../../assets/images/cookbook_3.jpg" alt="blood">
        </div>
    </div>
</template>

<script>
export default {
    
    
}
</script>

<style scoped>
.content{
    height: 90%;
    overflow: auto;
}
.tip{
    color: red;
    font-size: 24px;
    font-weight: bold;
}

.img_box{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

</style>