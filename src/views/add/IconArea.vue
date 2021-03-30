<template>
  <div class="iconArea" >
    <div v-for="(item,index) in activeArr" :key="index">
      <icon-area-item @sendActiveIndex="changeActiveIndex" :picSrc="item.icon" :picText="item.text"
       :isActived="index == activeIndex" :itemIndex="index" />
    </div>
  </div>
</template>

<script>
import IconAreaItem from "views/add/IconAreaItem"
export default {
  name: "IconArea",
  components: {
    IconAreaItem
  },
  data() {
    return {
      expendArr: [
        { icon: require("../../assets/img/add/dining.png"), text: "餐饮" },
        { icon: require("../../assets/img/add/traffic.png"), text: "交通" },
        { icon: require("../../assets/img/add/shopping.png"), text: "购物" },
        { icon: require("../../assets/img/add/beauty.png"), text: "美容" },
        { icon: require("../../assets/img/add/snacks.png"), text: "零食" },
        { icon: require("../../assets/img/add/book.png"), text: "书籍" }
      ],
      incomeArr: [
        { icon: require("../../assets/img/add/salary.png"), text: "工资" },
        { icon: require("../../assets/img/add/redPacket.png"), text: "红包" },
        { icon: require("../../assets/img/add/fellowship.png"), text: "助学金" },
        { icon: require("../../assets/img/add/transfer.png"), text: "转账" },
        { icon: require("../../assets/img/add/fund.png"), text: "基金" },
      ],
      activeArr: [],
      activeIndex: 0  //表明是哪个子组件是激活
    };
  },
  watch:{
    flag(){
      if(this.flag){
        this.activeArr = this.expendArr
      }else{
        this.activeArr = this.incomeArr
      }
    },
    resetFlag(){
      if(this.resetFlag){
        this.activeIndex = 0
      }
    }
  },
  props:['flag','resetFlag'],
  created(){
    this.activeArr = this.expendArr
  },
  methods: {
    changeActiveIndex(newActiveIndex){
      this.activeIndex = newActiveIndex
    }
  },
  computed:{
    activeText(){
      return this.activeArr[this.activeIndex].text
    }
  }
};
</script>

<style scoped>
.iconArea {
  display: flex;
  flex-wrap: wrap;
  margin: 0px 5px;
}

.iconArea::after{
  content:'';
  width:80px;
}
</style>