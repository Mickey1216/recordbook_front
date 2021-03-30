<template>
  <div class="privacy">
    <div class="back" @click="backClick">
      <img src="~assets/img/profile/back.png" alt />
    </div>
    <div class="title">
        <span>Mickey露记账软件隐私协议</span>
    </div>
    <div class="introduction">
        <span>引言</span>
    </div>
    <div class="first">
        <span>
            Mickey露记账重视用户的隐私。您在使用我们的服务时，我们可能会收集和使用您的相关信息。
            我们希望通过本《隐私政策》向您说明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及我们为您提供的访问、更新、控制和保护这些信息的方式。
            本《隐私政策》与您所使用的Mickey露记账服务息息相关，我们也希望您能够仔细阅读，并在需要时，按照本《隐私政策》的指引，作出您认为适当的选择。
            本《隐私政策》中涉及的相关技术词汇，我们尽量以简明扼要的表述向您解释，并提供了进一步说明的链接，以便您的理解。
        </span>
    </div>
    <div class="second">
        <span>
            我们对本隐私权政策中与您的权益存在重大关系的条款用粗体字进行标注。
            如果您不同意本隐私权政策的部分或全部内容，您应立即停止使用Mickey露记账软件服务并通过软件客服与我们联系。
            您通过勾选、点击确认、同意授权等方式确认本隐私权政策或直接使用及继续使用我们的服务，都表示您同意我们按照本《隐私政策》收集、使用、储存和分享您的信息。
        </span>
    </div>
    <div class="third">
        <span>
            如您对本《隐私政策》或与本《隐私政策》相关的事宜有任何问题，请通过<a href="#">383449174@qq.com</a>与我们联系
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Privacy",
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
.privacy {
    margin-top: 20px;
    margin-left: 10px;
}
.back {
  position: relative;
  left: 10px;
}
.title{
  font-size:25px;
  font-weight: bold;
}
.introduction{
    margin:15px 0px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    
}
.first{
    margin: 15px 0px;
    font-size: 18px;
    color: #111;
}
.second{
    margin: 15px 0px;
    font-size: 18px;
    font-weight: bold;
    color: #111;
}
.third{
    font-size: 16px;
    color: #444;
}
a{
    text-decoration: none;
    color: #FF9933;
}
</style>