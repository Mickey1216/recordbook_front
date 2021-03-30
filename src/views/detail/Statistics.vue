<template>
  <div class="statistics">
    <div class="top">
      <div class="back" @click="backClick">
        <img src="~assets/img/profile/back.png" />
      </div>
      <div class="dateChoose">
        <img src="~assets/img/detail/date.png" />
      </div>
    </div>

    <div class="month">
      <div class="datetime">2021年03月</div>
      <div class="type">支出 &nbsp; / &nbsp; 收入</div>
    </div>

    <div class="lineCt">
      <div class="lineText">支出趋势概况</div>
      <hr />
      <div id="line" ></div>
    </div>

    <div class="pieCt">
      <div class="pieText">支出占比概况</div>
      <hr />
      <div id="pie"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statistics",
  data(){
    return {
      chart: null
    }
  },
  methods:{
    backClick(){
      this.$store.commit('changeBarFlag',false)
      this.$router.replace('/add')
    }
  },
  created(){
    this.$store.commit("changeBarFlag",true)
    this.$store.commit('changeStatisticsFlag',true)
  }

};
</script>

<style scoped>
.statistics {
  margin: 20px 0px;
  width: 100%;
  padding-bottom: 20px;
}
.top{
  display: flex;
  justify-content: center;
  align-items: center;
}
.back {
  flex: 3.5;
  margin-left: 10px;
}
.dateChoose{
  flex: 1;
}
img{
  width: 40px;
  height: 40px;
}

.month {
  display: flex;
  font-size: 22px;
  font-weight: bold;
  margin-top: 15px;
  margin-left: 10px;
}
.datetime {
  flex: 1.5;
}
.type {
  flex: 1;
  color: #aaa;
  font-size: 20px;
}

.lineCt {
  border: 2px solid #111;
  border-radius: 10px;
  width: 93%;
  height: 250px;
  margin: 20px auto; 
}
.lineText{
  color: #111;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 20px;
}
hr{
  border: 0.5px solid #111;
  width: 90%;
}
#line{
  margin-left: 15px;
  width: 90%;
  height: 180px;
  border: 1px solid red;
}

.pieCt {
  border: 2px solid #111;
  border-radius: 10px;
  width: 93%;
  height: 250px;
  margin: 20px auto; 
}
.pieText{
  color: #111;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 20px;
}
hr{
  border: 0.5px solid #111;
  width: 90%;
}
#pie{
  margin-left: 15px;
  width: 90%;
  height: 180px;
  border: 1px solid red;
}
</style>




