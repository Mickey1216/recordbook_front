<template>
  <div class="editPsw">
    <div class="back" @click="backClick">
      <img src="~assets/img/profile/back.png" alt />
    </div>
    <hr />
    <div class="username">
      <span class="text">用户名</span>
      <span>{{ userName }}</span>
    </div>
    <hr />
    <div class="oldpsw">
      <span class="text">旧密码</span>
      <input v-model="oldPsw" type="password" placeholder="请填写旧密码"/>
    </div>
    <hr />
    <div class="newpsw">
      <span class="text">新密码</span>
      <input v-model="newPsw" type="password" placeholder="请输入新的密码"/>
    </div>
    <hr />
    <div class="surepsw">
      <span class="text">确认密码</span>
      <input v-model="newPswConfirm" type="password" placeholder="请再次输入新密码"/>
    </div>
    <hr />
    <div class="tips">
        <span>密码只支持英文、数字和下划线，长度6-16位</span>
    </div>
    <div class="btn">
      <button @click="sureClick">确认</button>
      <button @click="cancelClick">取消</button>
    </div>
  </div>
</template>

<script>
import { request } from "network/request"
import sha256 from 'crypto-js/sha256'
import { getCookie } from "assets/js/util"
export default {
  name: "EditPsw",
  data(){
    return{
      oldPsw: "",
      newPsw: "",
      newPswConfirm: "",
      userName: ""
    }
  },
  created() {
    this.$store.commit("changeSinglePageStatus", true)
    this.userName = getCookie("userName", document.cookie)
  },
  methods: {
    backClick() {
      this.$store.commit("changeSinglePageStatus", false)
      this.$router.replace("/profile")
    },
    cancelClick() {
      this.$store.commit("changeSinglePageStatus", false)
      this.$router.replace("/profile")
    },
    sureClick() {
      let op = this.oldPsw.trim()
      let np = this.newPsw.trim()
      let npc = this.newPswConfirm.trim()
      if(op == "" || np == "" || npc == ""){
        alert("有输入框为空")
        return
      }

      if(np != npc){
        alert("两次密码不一致")
        return
      }

      let reg = /^[a-z_0-9]{6,16}$/i
      if(!reg.test(np)){
        alert("只支持英文、数字和下划线，长度6-16位")
        return
      }

      if(op == np){
        alert("新旧密码一致")
        return
      }

      if(!reg.test(op)){
        alert("旧密码错误")
        return
      }

      request({url: "/user/change_psw?oldPsw=" + sha256(op).toString() + 
        "&newPsw=" + sha256(np).toString()})
      .then(res => {
        if(res.data.msg == "opWrong"){
          alert("旧密码错误")
          return
        }else if(res.data.msg == "notOk"){
          alert("更新失败，请联系MICKEY")
          return
        }else{
          alert("密码更新成功了哟")

          this.newPsw = this.newPswConfirm = this.oldPsw = ""
        }
      })
    }
  }
};
</script>

<style scoped>
.editPsw {
  margin-top: 20px;
}
hr {
  width: 92%;
  border: 0.5px solid #eee;
}
.back {
  position: relative;
  left: 20px;
}
.username {
  margin: 20px 20px;
  height: 25px;
  line-height: 25px;
  font-size: 18px;
  color:#888;
}
.oldpsw{
  margin: 20px 20px;
  height: 25px;
  line-height: 25px;
  font-size: 18px;
  color:#111;
}
.newpsw{
  margin: 20px 20px;
  height: 25px;
  line-height: 25px;
  font-size: 18px;
  color:#111;
}
.surepsw{
  margin: 20px 20px;
  height: 25px;
  line-height: 25px;
  font-size: 18px;
  color:#111;
}
.tips{
    color: #888;
    font-size: 16px;
    margin:10px 0px 10px 10px; 
}
.text{
    padding-right: 40px;
}
.surepsw .text{
    padding-right: 20px;
}
input{
    outline: none;
    border: none;
}
.btn{
    margin: 10px 0px 10px 10px;
}
button{
    margin: 10px 50px;
    width: 70px;
    height: 40px;
    outline: none;
    border: 1px solid #555;
    border-radius: 5px;
    color: #333;
}

</style>