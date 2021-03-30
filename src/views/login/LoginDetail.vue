<template>
  <div class="loginDetail">
      <div @click="backBtnClick"><img src="~assets/img/profile/back.png"></div>
      
      <div class="account">
          <div :style="hasErrorStyle">账号或密码错误</div>
          <input v-model="account" type="text" placeholder="请输入手机号或邮箱">
      </div>
      <div class="psw">
          <input v-model="psw" type="password" placeholder="请输入密码">
      </div>
      <button @click="loginBtnClick">登录</button>
  </div>
</template>

<script>
import { request } from "network/request"
import sha256 from "crypto-js/sha256"
export default {
    name:'LoginDetail',
    data(){
      return {
        hasError: false,
        account: "",
        psw: ""
      }
    },
    methods: {
      backBtnClick(){
        this.$router.replace("/login")
      },
      loginBtnClick(){
        let accout = this.account.trim()
        let psw = this.psw.trim()

        if(accout == "" || psw == ""){
          alert("你没账号或密码么~")
          return
        }

        request({url: "/user/login?account=" + accout + "&psw=" + sha256(psw).toString()})
        .then(res => {
          if(res.data.success){
            this.$router.replace("/add")
          }else{
            this.hasError = true
          }
        })
      }
    },
    watch: {
      account(){
        this.hasError = false;
      },
      psw(){
        this.hasError = false;
      }
    },
    computed: {
      hasErrorStyle(){
        return this.hasError? 'visibility: visible': 'visibility: hidden'
      }
    }
}
</script>

<style scoped>
.loginDetail{
  background-image: url("../../../src/assets/img/login/bg.png");
  width: 100%;
  height: 665px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loginDetail>div:first-child{
  position: absolute;
  top: 10px;
  left: 20px;
}

.psw{
  margin: 30px 0px;
}

.account>div:first-child{
  color: #FF3333;
  font-size: 14px;
}

input{
  border: 1px solid #111;
  border-radius: 12px;
  outline: none;
  width: 240px;
  height: 50px;
  padding-left: 10px;
}
button{
    width: 90px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color: #FFCC99;
    color:#444;
}
</style>