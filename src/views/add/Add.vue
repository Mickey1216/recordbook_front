<template>
  <div class="add">
      <div class="title">
        <span class="expend" :class="{isActive: isExpendActive}" @click="expendClick">支出</span>
        <span class="income" :class="{isActive: isIncomeActive}" @click="incomeClick">收入</span>
      </div>

      <icon-area :flag="flag" ref="ia" :resetFlag="resetFlag"/>
      
      <input-area @completeEvent="sendRecord" @startNewRecord="resetRecord"
         :resetFlag="resetFlag"/>
     
  </div>
</template>

<script>
import IconArea from 'views/add/IconArea'
import inputArea from 'views/add/inputArea'
import { request } from "network/request"
export default {
    name:'Add',
    components:{
        IconArea,
        inputArea
    },
    data(){
        return {
            isExpendActive: true,
            isIncomeActive: false,
            flag: true,
            resetFlag:false
        }
    },
    computed:{
        assembleRecord(){
            return function(text,type,inputText,dt){
                return "money=" + text + "&type=" + type + "&detail=" +
                 inputText + "&record_time=" + dt
            }
        }
    },
    methods:{
        expendClick(){
            this.isExpendActive = true;
            this.isIncomeActive = false;
            
            this.flag = true;
        },
        incomeClick(){
            this.isIncomeActive = true;
            this.isExpendActive = false;
            
            this.flag = false;
        },
        sendRecord(text,inputText){
            let type = this.$refs.ia.activeText
            let nowTime = new Date().getFormatStr(2)

            request({url:'/record/add_record?' + this.assembleRecord(this.isExpendActive? -text: text,
                type,inputText,nowTime)})
            .then(res => {
                if(res.data.success){
                    this.resetFlag = true
                }else{
                    alter("服务器异常,请及时联系Mickey")
                }
            }).catch(err => {
                alert("请检查网络配置")
            })
        },
        resetRecord(){
            this.resetFlag = false
        }
    },
    created(){
        request({url: "/user/check_login"})
        .then(res => {
            if(!res.data.success)
                this.$router.replace("/login")
        }).catch(err => {})

        this.$store.commit("changeSinglePageStatus", false)
    }
}
</script>

<style scoped>
.add{
    padding-bottom: 20px;
}
.title{
    text-align: center;
    margin:30px 20px;
    font-family: 幼圆;
}
.expend{
    font-size:22px;
    color:#666666;
    padding-right:40px;
   
}
.income{
    font-size:22px;
    color:#666666;
}

.isActive{
    color:#111111;
    text-decoration: underline;
    text-decoration-color: #FF9933;
}
</style>