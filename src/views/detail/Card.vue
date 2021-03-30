<template>
  <div class="card">
      <div class="balance">
          <div class="text">本年结余</div>
          <div class="money">{{ cardData.yearSurplus }}</div>
      </div>
      <div class="outcome">
          <div class="text">本年支出</div>
          <div class="money">{{ cardData.yearExpend }}</div>
      </div>
      <div class="income">
          <div class="text">本年收入</div>
          <div class="money">{{ cardData.yearIncome }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Card',
    props:['cardData']
}
</script>

<style scoped>
.card{
    margin: 5px auto;
    width: 85%;
    height: 130px;
    border:2px solid #222;
    border-radius: 8px;
}

.balance, .income, .outcome{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    border-bottom: 1px solid #eee;
}

.balance{
    margin: 20px 20px;
    height: 26px;
}
.balance .text{
    font-size: 19px;
    font-weight: bold;
    color: #111;
}
.balance .money{
    font-size: 25px;
    font-weight: bold;
    color: #FF6666;
    margin-right: 20px;
}
.outcome{
    margin: 10px 20px;
    height: 20px;
}
.outcome .text{
    font-size: 16px;
    color:#888;
}
.outcome .money{
    font-size: 16px;
    color:#111;
    margin-right: 20px;
}
.income{
    display: flex;
    margin: 10px 20px;
    height: 20px;
}
.income .text{
    font-size: 16px;
    color:#888;
}
.income .money{
    font-size: 16px;
    color:#111;
    margin-right: 20px;
}
</style>