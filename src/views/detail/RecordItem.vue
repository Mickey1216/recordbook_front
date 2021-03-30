<template>
  <div class="recordItem">
    <div class="recordItemTop">
      <div class="topDate">{{ datetime }} {{ week }}</div>
      <div class="topCalc">结余：{{ surplus }}</div>
    </div>

    <div class="spendingItem" v-for="(item, index) in itemDataRes" :key="index">
      <div class="spendingPic">
        <img :src="item.iconSrc" >
      </div>

      <div class="spendingCt">
        <div class="spendingType" :style="hasGap(item.detail)">{{ item.type }}</div>
        <div class="spendingDetail" v-if="item.detail != ''" >{{ item.detail }}</div>
      </div>
     
      <div class="spendingBill">{{ item.bill }}</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'RecordItem',
    props: ["itemDataRes",'datetime','week','surplus'],
    computed: {
      hasGap(){
        return function(detail){
          return detail != ''? "padding-bottom: 5px": ''
        }
      }
    }
}
</script>

<style scoped>
.recordItemTop{
  display: flex;
  color:#888;
  margin-bottom: 10px;
}
.topDate{
  flex:1.5;
}
.topCalc{
  flex: 1;
}
.spendingItem{
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  font-weight: bold;
}
.spendingPic{
  flex: 1;
}
.spendingPic img{
  width: 50px;
  height: 50px;
}
.spendingCt{
  flex:2;
}
.spendingType{
  flex: 2;
}
.spendingDetail{
  font-size: 12px;
  font-weight: inherit;
  color:#bbb;
}
.spendingBill{
  flex: 1;
}

</style>