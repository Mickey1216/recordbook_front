<template>
  <div class="record">
      <div class="recordTop">
          <div class="text" @click="ccc">收支记录</div>
          <div class="icon">
              <img src="~assets/img/detail/add.png" @click="jumpToAdd">
              <span @click="jumpToAdd">新建</span>
          </div>
      </div>

      <div v-for="(item,index) in recordData" :key="index" class="recordItem">
          <record-item :datetime="item.datatime" :week="item.week" :surplus="item.surplus" :itemDataRes="item.things"/>
      </div>
  </div>
</template>

<script>
import RecordItem from 'views/detail/RecordItem'
export default {
    name:'Record',
    components:{
        RecordItem
    },
    props:['recordData'],
    data(){
        return {
            // dateArr:[
            //     {datetime:'3.15',week:'星期一',surplus:'-27.00', things: [
            //         {iconSrc:this.getPic('工资'),type:'工资',bill:'+8.00'},
            //         {iconSrc:this.getPic('餐饮'),type:'餐饮',bill:'-8.00'},
            //         {iconSrc:this.getPic('购物'),type:'购物',bill:'-48.00'}
            //     ]},
            //     {datetime:'3.10',week:'星期三',surplus:'27.00'},
            //     {datetime:'3.9',week:'星期二',surplus:'-54.00'},
            //     {datetime:'3.8',week:'星期一',surplus:'34.00'},
            // ]
        }
    },
    methods:{
        jumpToAdd(){
            this.$store.commit('changeBarFlag',false)
            this.$router.replace('/add')
        },
        
    }
}
</script>

<style scoped>
.record{
    width: 85%;
    margin: 20px auto;
    
}
.recordTop{
    display: flex;
    margin-bottom: 20px;
}

.text{
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #111;
}

.recordTop .icon{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.recordTop span{
    color:#FF9999;
    font-weight: bold;
}

.recordItem{
    margin-top: 20px;
}
</style>