<template>
  <div class="detail">
      <router-view />
      <div class="back" @click="backClick" v-show="!statisticsFlag">
        <img src="~assets/img/profile/back.png" alt />
      </div>
      <card v-show="!statisticsFlag" :cardData="cardData"/>
      <record v-show="!statisticsFlag" :recordData="recordData"/>
      <div class="tip" v-if="tipShow">还没有记录哟~~~</div>
  </div>
</template>

<script>
import Card from 'views/detail/Card'
import Record from 'views/detail/Record'
import {request} from 'network/request'
import moment from 'moment'
export default {
    name: "Detail",
    data(){
        return{
            picTypeReflex: {
                "餐饮": "salary",
                "交通": "traffic",
                "购物": "shopping",
                "美容": "beauty",
                "零食": "snacks",
                "书籍": "book",

                "工资": "salary",
                "红包": "redPacket",
                "转账": "transfer",
                "助学金": "fellowship",
                "基金": "fund"
            },
            recordData:[],
            cardData:{},
            tipShow: true
        }
    },
    components:{
        Card,
        Record
    },
    created(){
        request({url: "/user/check_login"})
        .then(res => {
            if(!res.data.success)
                this.$router.replace("/login")
        }).catch(err => {})

        this.$store.commit("changeBarFlag", true)
        this.$store.commit('changeStatisticsFlag', false)
        this.initLoadData()
    },
    methods:{
        backClick(){
            this.$store.commit('changeBarFlag',false)
            this.$router.replace('/add')
        },
        initLoadData(){
            let year = new Date().getFullYear()
            request({url:'/record/get_record?year=' + year}).then(res => {
                let resArr = res.data.data
                this.cardData = {yearSurplus:0,yearExpend:0,yearIncome:0}
                if(!resArr.length){
                    this.tipShow = true
                    return
                }else
                    this.tipShow = false
                
                let recordRowData = {}
                let recordRowTitleFlag = false
                //区分是哪天的标志
                let dateFocus = this.getFormatDate(resArr[0].record_date)
                
                resArr.forEach((obj, index) => {
                    //------------------card数据
                    if(this.getTypeReflex(obj.type) == -1){
                        this.cardData.yearExpend += obj.money
                    }else if(this.getTypeReflex(obj.type) == 1){
                        this.cardData.yearIncome += obj.money
                    }else{
                        console.log("code: -11")
                        return 
                    }
                    this.cardData.yearSurplus += obj.money
                    //-------------------------

                    //------------------record数据
                    if(!recordRowTitleFlag){
                        //刚进来
                        recordRowData["datatime"] = dateFocus
                        recordRowData["week"] = this.transDay(new Date(obj.record_date).getDay())
                        recordRowData["surplus"] = 0
                        recordRowData["things"] = []
                        recordRowTitleFlag = true
                    }
                    
                    //----------表明每一次的循环都进行了存储
                    recordRowData["things"].push({
                        iconSrc: this.getPic(obj.type),
                        type: obj.type,
                        detail:obj.detail,
                        bill: this.getMoney(obj.money)
                    })

                    recordRowData["surplus"] += obj.money
                    //----------------------------------
                    
                    // if里的三目运算符    是否是最后一个元素之前 ? 判断这个元素的日期和下一个元素日期是否相同: 表明是最后一个元素，所以直接true
                    if(index < resArr.length-1? this.getFormatDate(resArr[index+1].record_date) != dateFocus: true){
                        //数组的下一个日期和当前日期不一样 / 此次obj已经是最后一个元素
                        recordRowData["surplus"] = this.getMoney(recordRowData["surplus"])
                        this.recordData.push(recordRowData)
                        dateFocus = index < resArr.length-1? this.getFormatDate(resArr[index+1].record_date): ''
                        recordRowTitleFlag = false
                        recordRowData = new Object
                    }
                    //-------------------------
                })
                
                Object.keys(this.cardData).forEach(key => {
                    this.cardData[key] = this.getMoney(this.cardData[key])
                })
            }).catch(err => {
                console.log(err)
            })
        },
        getFormatDate(date, type = 1){
            let f = ""
            if(type == 1){
                f = "Y-MM-DD"   //年月日
            }else if(type == 2){
                f = "MM-DD"     //月日
            }else{
                return "err"
            }

            return moment(date).format(f)
        },
        getTypeReflex(type){
            if(type == "餐饮" || type == "交通" || type == "购物" ||
                type == "美容" || type == "零食" || type == "书籍"){
                     return -1
            }else if(type == "工资" || type == "红包" || type == "转账" ||
                type == "助学金" || type == "基金"){
                     return 1
            }else{
                return 0
            }
        }
    },
    computed:{
        statisticsFlag(){
            return this.$store.state.moduleDetail.statisticsFlag
        },
        getPic(){
            return function(type){
                return require('../../assets/img/add/' + this.picTypeReflex[type] + '.png')
            }
        },
        getMoney(){
            return function(bill){
                if(!bill){
                    return '￥0'
                }
                return bill < 0? ("- ￥" + -bill.toString()): ('+￥' + bill.toString())
            }
        },
        transDay(){
            return function(week){
                let reflex = {0: '日', 1: '一',2: '二',3: '三',4: '四',5: '五',6: '六'}
                return "星期"+reflex[week]
            }
        }
    }
}
</script>

<style scoped>
.tip{
    text-align: center;
    color: #888;
    margin-top: 60px;
    font-weight: bolder;
}

.detail{
    padding-bottom: 20px;
}
.back{
    margin: 10px 20px;
}
</style>