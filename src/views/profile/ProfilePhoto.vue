<template>
  <div class="profilePhoto">
      <form enctype="multipart/form-data" method="post" action="/reflex_2/upload">
        <div class="photo">
            <input type="file" name="avatar" @change="imgLoaded" ref="uploadFileRef"
            v-show="false" accept="image/png,image/jpeg,image/gif,image/jpg" />
            <img :src="userInfo.photoSrc" @click="imgClick" alt="">
            <!-- <input type='submit' value='提交' ref="submitFileRef"> -->
        </div>
      </form>
      <div class="nickname">
        <div class="text">
            <span v-show="flagText">{{ nickname }}</span>
            <input type="text" ref="textInputRef" :value="nickname" v-show="!flagText">
        </div>
        <div class="edit" @click="editClick">
            <img :src="getImgSrc" alt="">
        </div>
      </div>
  </div>
</template>

<script>
import inputArea from '../add/inputArea.vue'
export default {
  components: { inputArea },
    name:'ProfilePhoto',
    props: ["nickname"],
    data(){
        return {
            userInfo:{photoSrc:require('../../assets/img/profile/profile.png')},
            flagText:true,
            editIconSrc:require('../../assets/img/profile/edit.png'),
            finishIconSrc:require('../../assets/img/profile/finish.png'),
            isEditIcon:true,
        }
    },
    methods:{
        editClick(){
            this.flagText = !this.flagText

            if(!this.isEditIcon && this.nickname !== this.$refs.textInputRef.value){
                let newName = this.$refs.textInputRef.value.trim()
                let reg = /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,16}$/
                if(newName == "" || !reg.test(newName)){
                    alert("只支持中文、英文、数字和下划线，长度2-16位")
                    return
                }

                this.$emit("changeUsernameEvent", newName)
            }

            this.isEditIcon = !this.isEditIcon  
        },
        imgClick(){
            this.$refs["uploadFileRef"].click()
        },
        imgLoaded(){
            this.$refs["submitFileRef"].click()
        }
    },
    computed:{
        getImgSrc(){
            return this.isEditIcon ? this.editIconSrc : this.finishIconSrc
        }
    }
}
</script>

<style scoped>
.profilePhoto{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background: url('../../assets/img/profile/bg.png') no-repeat;
    background-size: 100%;
}
.photo{
    border:2px solid #333;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-top: 20px;
}
.photo img{
    width: 80px;
    height: 80px;
}
.nickname{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 25px;
}
.text{
    font-size: 19px;
    color:#111111;
}
.text input{
    border: none;
    outline: none;
    background-color: none;
    width: 100px;
    text-align: center;
}
</style>