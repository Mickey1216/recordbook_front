<template>
  <div class="inputAreaTop">
    <div class="remarkText">备注:</div>
    <input v-model="inputText" type="text" class="remarkInput" placeholder="点击写备注" />
    <div class="money">￥{{text}}</div>
  </div>
</template>

<script>
export default {
    name:'inputAreaTop',
    props:['text','resetFlag'],
    data(){
      return {
        inputText: ""
      }
    },
    watch:{
      resetFlag(){
        if(this.resetFlag){
          this.inputText = ''
        }
      }
    }
}
</script>

<style scoped>
.inputAreaTop{
    display: flex;
    width:80%;
    height: 40px;
    background-color: white;
    align-items: center;
    margin:10px 40px;
    border:1px solid #111111;
    border-radius: 6px;
}
.remarkText{
   font-size:18px;
   color:#222222;
   margin-left: 10px;
}
.remarkInput{
    border:none;
    outline:none;
    width:100px;
    margin-right: 10px;
}
input::-webkit-input-placeholder { 
    font-size:18px;
}
/* .money{
    
} */
</style>