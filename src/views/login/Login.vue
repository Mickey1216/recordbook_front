<template>
  <div class="login">
    <div class="loginChoose" @click="loginClick">
      <div class="choice">
        <img src="~assets/img/login/phone.png" alt />
        <span>手机号登录</span>
        <span class="symbol">/</span>
      </div>
      <div class="choice">
        <img src="~assets/img/login/email.png" alt />
        <span>邮箱登录</span>
      </div>
    </div>

    <div class="register" @click="registerClick">
      <img src="~assets/img/login/register.png" alt />
      <span>注册账号</span>
    </div>
  </div>
</template>

<script>
import { request } from 'network/request'

export default {
  name: "Login",
  created(){
        this.$store.commit("changeSinglePageStatus", true)
        this.$store.commit("changeBarFlag", false)

        request({url: "/user/load_user"})
        .then(res => {
          if(res.data.success){
            document.cookie = "userName="+res.data.msg.userName
            document.cookie = "userEmail="+res.data.msg.userEmail
            document.cookie = "userPhoto="+res.data.msg.userPhoto
            document.cookie = "userPhone="+res.data.msg.userPhone

            this.$router.replace("/add")
          }
        }).catch(err => {})
  },
  methods: {
    loginClick() {
        this.$router.replace('/loginDetail')
    },
    registerClick() {
        this.$router.replace('/register')
    }
  }
};
</script>

<style scoped>
.login {
  background: url("../../../src/assets/img/login/bg.png");
  width: 100%;
  height: 665px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loginChoose {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  height: 70px;
  margin-bottom: 40px;
  width: 95%;
}
.choice {
  display: flex;
  align-items: center;
}
.choice img {
  width: 50px;
  height: 50px;
}
.choice span {
  font-size: 20px;
  font-weight: bold;
  color: #222;
}
.choice .symbol {
  padding-left: 25px;
  font-size: 40px;
  color: #bbb;
}

.register {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  height: 70px;
  width: 95%;
}

.register img {
  width: 50px;
  height: 50px;
}

.register span {
  font-size: 20px;
  font-weight: bold;
  color: #222;
}
</style>