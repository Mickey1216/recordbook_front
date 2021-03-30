<template>
  <div class="register">
    <div class="username">
      <div class="error" v-if="!checkValidStatus[0]">{{ errors[0] }}</div>
      <input type="text" placeholder="用户名" v-model="username"
          :class="{inputInvalid: !checkValidStatus[0]}" />
    </div>
    <div class="psw">
      <div class="error" v-if="!checkValidStatus[1]">{{ errors[1] }}</div>
      <input type="password" placeholder="密码" v-model="psw"
          :class="{inputInvalid: !checkValidStatus[1]}" />
    </div>
    <div class="email">
      <div class="error" v-if="!checkValidStatus[2]">{{ occupiedFlag? errors[5]: errors[2] }}</div>
      <input type="email" placeholder="邮箱" v-model="email" 
          :class="{inputInvalid: !checkValidStatus[2]}"/>
      <div class="active">
        <a href="#" @click="sendEmailClick">点击此获取邮箱验证码</a>
      </div>
    </div>
    <div class="code">
      <div class="error" v-if="!checkValidStatus[3]">{{ errors[3] }}</div>
        <input type="text" placeholder="邮箱验证码" v-model="verifyCode" 
          :class="{inputInvalid: !checkValidStatus[3]}" /> 
    </div>
    <div class="phone">
      <div class="error" v-if="!checkValidStatus[4]">{{ occupiedFlag? errors[5]: errors[4] }}</div>
      <input type="tel" placeholder="手机号码" v-model="phone" 
          :class="{inputInvalid: !checkValidStatus[4]}"/>
    </div>
    <div class="btn">
      <div class="registerBtn" @click="submitClick">注册</div>
      <div class="cancelBtn" @click="cancelClick"> 取消</div>
    </div>
  </div>
</template>

<script>
import { request } from 'network/request'
import sha256 from 'crypto-js/sha256'

export default {
  name: "Register",
  data(){
    return {
      username:'',
      psw:'',
      email:'',
      verifyCode:'',
      phone:'',
      checkValidStatus: [1, 1, 1, 1, 1],
      errors:['只支持中文、英文、数字和下划线，长度2-16位',
              '只支持英文、数字和下划线，长度6-16位',
              '请输入正确的邮箱地址',
              '请输入正确的验证码',
              '请输入正确的手机号码',
              "邮箱或者手机号已被注册"
      ],
      occupiedFlag: false,
      canSubmit: true
    }
  },
  watch:{
    username(){
      let reg = /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,16}$/
      if(reg.test(this.username)){
        this.checkValidStatus[0] = 1
      }else{
        this.checkValidStatus[0] = 0
      }
    },
    psw(){
      let reg = /^[a-z_0-9]{6,16}$/i
      if(reg.test(this.psw)){
        this.checkValidStatus[1] = 1
      }else{
        this.checkValidStatus[1] = 0
      }
    },
    email(){
      if(this.occupiedFlag)
        this.occupiedFlag = false

      let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if(reg.test(this.email)){
        this.checkValidStatus[2] = 1
      }else{
        this.checkValidStatus[2] = 0
      }
    },
    verifyCode(){
      let reg = /^\d{4}$/
      if(reg.test(this.verifyCode)){
        this.checkValidStatus[3] = 1
      }else{
        this.checkValidStatus[3] = 0
      }
    },
    phone(){
      if(this.occupiedFlag)
        this.occupiedFlag = false

      let reg = /^(13[0-9]|14[5-9]|15[0-3,5-9]|16[2,5,6,7]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/
      if(reg.test(this.phone)){
        this.checkValidStatus[4] = 1
      }else{
        this.checkValidStatus[4] = 0
      }
    }
  },
  methods:{
      sendEmailClick(){
        if(this.email.trim() == "" || !this.checkValidStatus[2]){
          this.checkValidStatus[2] = 0
          return
        }
        request({url:'/mail/sendMail?to=' + this.email})
      },
      submitClick(){
          if(!this.canSubmit)
            return

          this.canSubmit = false

          //提交的时候需要判断是否有输入框为空，为空不行
          if(this.username.trim() == "" || this.psw.trim() == "" ||
           this.email.trim() == "" || this.verifyCode.trim() == "" || 
           this.phone.trim() == ""){

            alert("有信息为空噢")
            return
          }

          let validflag = 1
          this.checkValidStatus.forEach(item => {
            if(!item)
              validflag = 0
          })

          if(!validflag)
            return
          
          request({url:'/user/check_valid?code=' + this.verifyCode + "&email=" + this.email
              + "&phone=" + this.phone})
          .then(res => {
              if(!res.data.success){
                this.canSubmit = true
              }

              if(res.data.msg == "Disappear"){
                alert("请点击发送邮箱或者验证码已过期")
              }else if(res.data.msg == "Unmatched"){
                this.checkValidStatus[3] = 0
              }else if(res.data.msg == "Occupied"){
                this.checkValidStatus[2] = 0
                this.checkValidStatus[4] = 0
                this.occupiedFlag = true
              }
              else if(res.data.msg == "OK"){
                request({url: "/user/add_user?" + this.assembleAddUser()})
                .then(res => {
                  this.$router.replace('/login')
                }).catch(err => {
                  alert("注册失败，请联系MICKEY")
                }).finally((that => {that.canSubmit = true})(this))
              }
          }).catch(err => {
            console.log(err, "err");
          })
      },
      cancelClick(){
          this.$router.replace('/login')
      },
      assembleAddUser(){
        return `name=${this.username}&psw=${sha256(this.psw).toString()}&email=${this.email}&phone=${this.phone}&create_time=${new Date().getFormatStr(2)}`
      }
  }
};
</script>

<style scoped>
.register {
  background-image: url("../../../src/assets/img/login/bg.png");
  width: 100%;
  height: 665px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.register>div{
  margin: 15px 0px;
}

.inputInvalid{
  border: 1px solid #FF3333;
}

input{
  border: 1px solid #111;
  border-radius: 12px;
  outline: none;
  width: 240px;
  height: 50px;
  padding-left: 10px;
  background-size: 35px 35px; /*这里是背景图片的大小*/
  background-repeat: no-repeat; /*让图片不重复*/
  background-position: 200px ; /*图片在input中的位置  离左边的距离和离右边的距离*/
}
.username input{
  background-image: url("../../../src/assets/img/login/username.png");
}

.error{
  width: 240px;
  font-size: 14px;
  color:#FF3333;
}

.psw input{
  background-image: url("../../../src/assets/img/login/psw.png");

}
.email input{
  background-image: url("../../../src/assets/img/login/email2.png");

}
.phone input{
  background-image: url("../../../src/assets/img/login/phoneNum.png");
}

.active a{
    color:#666;
    text-decoration: none;
    padding-left: 80px;
}

.btn{
    display: flex;
}

.btn div{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid #111;
    border-radius: 3px;
    width: 70px;
    height: 30px;
    margin-right: 20px;
}
.registerBtn{
   background-color: #FFCC99;
}
.cancelBtn{
    background-color: #eee;
}
</style>