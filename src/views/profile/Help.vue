<template>
  <div class="help">
    <div class="back" @click="backClick">
      <img src="~assets/img/profile/back.png" alt />
    </div>
    <div class="tilte">
        <span>Mickey露记账常见问题答疑</span>
    </div>
    <div class="date">
        <span>2021-03-16</span>
    </div>
    <div class="questions">
        <div class="question"><span>1.如何删除账单？</span></div>
        <div class="text"><span>在明细页面，左滑即可删除账单</span></div>
    </div>
    <div class="questions">
        <div class="question"><span>2.账单支持云备份吗？</span></div>
        <div class="text">
            <span>
                喵喵记账将用户的每一笔记账信息都加密保存在服务器上，即使您删除app后，您的记账信息也不会丢失。
                如果您不想使用喵喵记账了，可以前往个人信息界面选择注销用户，您的所有数据将从服务器永久删除。
            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Help",
  created() {
    this.$store.commit("changeSinglePageStatus", true);
  },
  methods: {
    backClick() {
      this.$store.commit("changeSinglePageStatus", false)
      this.$router.replace("/profile")
    }
  }
};
</script>

<style scoped>
.help {
    margin-top: 20px;
}
.back {
  position: relative;
  left: 20px;
}
.tilte{
    text-align: center;
    color: #FF9966;
    font-size: 25px;
    font-weight: bold;
   
}
.date{
    margin: 20px 0px;
    text-align: center;
    color: #FF9966;
    font-size: 20px;
    font-weight: bold;
}
.questions{
    margin-bottom: 20px;
    margin-left:10px ;
}
.question{
    color: #FF9966;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}
.text{
    font-size: 16px;
    color: #222;
}
</style>