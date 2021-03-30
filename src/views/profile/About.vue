<template>
  <div class="about">
      <div class="back" @click="backClick">
          <img src="~assets/img/profile/back.png" alt="">
      </div>
      <div class="icon">
          <img src="~assets/img/profile/mickey.png" alt="">
      </div>
      <div class="text">
          <span>Mickey露记账 V1.0.0</span>
      </div>
      <div class="tips">
          <span>我们希望Mickey露记账能帮你养成记账的习惯</span>
      </div>
      <div class="item"><span>QQ号:383449174</span></div>
      <div class="item"><span>微博:谁是LI啊</span></div>
      <div class="item"><span>邮箱:383449174@qq.com</span></div>
      <div class="item"><span>微信号:sizeofLL</span></div>
  </div>
</template>

<script>
export default {
    name:"About",
    created(){
        this.$store.commit("changeSinglePageStatus", true)
    },
    methods:{
        backClick(){
            this.$store.commit("changeSinglePageStatus", false)
            this.$router.replace("/profile")
        }
    }
}
</script>

<style scoped>
.about{
    text-align: center;
    margin-top: 20px;
}
.back{
    position: fixed;
    left: 20px;
}
.icon img{
    margin-top: 20px;
    width: 120px;
    height: 120px;
}
.text{
    font-size: 23px;
    font-weight: bold;
    color:#111;
}
.tips{
    font-size: 16px;
    color: #333;
    margin-top: 5px;
}
.item{
    margin: 20px auto;
    width: 90%;
    height: 50px;
    line-height: 50px;
    border: 1px solid #111;
    border-radius: 10px;
    background-color: #FFCC99;
    font-size: 16px;
    font-weight: bold;
}
</style>