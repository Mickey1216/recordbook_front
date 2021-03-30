<template>
  <div class="iconAreaItem" @click="itemClick" :class="{isActiveColor:isActived}">
      <img :src="picSrc" alt="">
      <div>{{ picText }}</div>
  </div>
</template>

<script>
export default {
    name:'IconAreaItem',
    props:['picSrc', 'picText', 'isActived', 'itemIndex'],
    data(){
      return {
      }
    },
    methods:{
      itemClick(){
        this.$emit("sendActiveIndex", this.itemIndex)
      }
    }
}
</script>

<style scoped>
.iconAreaItem{
  border:2px solid gray;
  border-radius: 50%;
  width:80px;
  height:80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px 2px;
}

.iconAreaItem>img{
  height: 50px;
  width: 50px;
}

.isActiveColor{
  border:2px solid #FF9933;
}
</style>