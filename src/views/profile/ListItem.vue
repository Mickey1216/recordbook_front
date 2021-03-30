<template>
  <div class="listItem" @click="listItemClick">
      <div class="icon">
          <img :src="picSrc" alt="">
      </div>
      <div class="text">{{ text }}</div>
      <div class="arrow">
          <img src="~assets/img/profile/greater.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name:'ListItem',
    props:['picSrc','text','jumpTo'],
    methods:{
        listItemClick(){
            this.$router.replace("/profile/" + this.jumpTo)
        }
    }
}
</script>

<style scoped>
.listItem{
    display: flex;
    width: 92%;
    border-top: 1px solid #666;
    align-items: center;
    margin: 0px auto;
    font-size: 18px;
}
.icon{
    margin: 10px 0px;
    flex:1;
}
.icon img{
    width: 35px;
    height: 35px;
}
.text{
    margin: 10px 0px;
    flex:6;
}
.arrow{
    flex:1;
    margin: 10px 0px;
}
.arrow img{
    width: 25px;
    height: 25px;
}
</style>