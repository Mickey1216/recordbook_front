<template>
  <div class="tally">
      <div class="left">
          <div class="dayText">记账天数</div>
          <div class="dayNum">{{ recordDays }}</div>
      </div>
      <div class="center"></div>
      <div class="right">
          <div class="totalText">记账笔数</div>
          <div class="totalNum">{{ rowsCount }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Tally',
    props: ["recordDays", "rowsCount"]
}
</script>

<style scoped>
.tally{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: -20px auto;
    text-align: center;
    width: 90%;
    height: 70px;
    border: 2px solid #444;
    border-radius: 5px;
    background-color: #fff;
}
.right{
    font-size: 19px;
    font-weight:bold;
}
.totalText{
    margin-bottom: 5px;
}
.center{
    border-right: 2px solid #444;
    height: 60px;
}
.left{
    font-size: 19px;
    font-weight: bold;
}
.dayText{
    margin-bottom: 5px;
}

</style>