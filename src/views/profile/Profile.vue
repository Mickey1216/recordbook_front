<template>
  <div class="profile">
      <router-view />
      <profile-photo @uploadAvatarEvent="uploadAvatar" @changeUsernameEvent="changeUsername"
       :nickname="userName" v-show="!isSinglePage" />
      <tally v-show="!isSinglePage" :recordDays="recordDays" :rowsCount="rowsCount"  />
      <list v-show="!isSinglePage" />
  </div>
</template>

<script>
import ProfilePhoto from 'views/profile/ProfilePhoto'
import Tally from 'views/profile/Tally'
import List from 'views/profile/List'
import { request } from 'network/request'
import { getCookie } from "assets/js/util"
export default {
    name: "Profile",
    components:{
        ProfilePhoto,
        Tally,
        List
    },
    data(){
        return{
            userName: "",
            recordDays: "",
            rowsCount: ""
        }
    },
    computed: {
        isSinglePage(){
            return this.$store.state.moduleProfile.isSinglePage
        }
    },
    methods: {
        changeUsername(newName){
            request({url: "/user/change_username?newName=" + newName})
            .then(res => {
                if(res.data.success){
                    document.cookie = "userName=" + newName
                    this.userName = newName
                }else{
                    alert("修改失败，请联系MICKEY")
                }
            })
        },
        uploadAvatar(avatarBase64){
            // request({url: "/user/upload_avatar", method: "POST", data: {"avatar": avatarBase64}})
            // .then(res => {
            //     console.log(res);
            // })
        },
        getAvatar(){
            // request({url: "/user/load_avatar"})
            // .then(res => {
            //     console.log(res)
            // })
        },
        loadInfo(){
            request({url: "/user/load_profile_info"})
            .then(res => {
                //TODO userName
                this.recordDays = (parseInt((new Date().getTime() - Date.parse(res.data.createTime))/1000/60/60/24)+1).toString()
                this.rowsCount = res.data.rowsCount
            })
        }
    },
    created(){
        request({url: "/user/check_login"})
        .then(res => {
            if(!res.data.success)
                this.$router.replace("/login")
            else{
                this.userName = getCookie("userName", document.cookie)
            }
        }).catch(err => {})

        // this.getAvatar()
        this.loadInfo()

        this.$store.commit("changeSinglePageStatus", false)
    }
}
</script>

<style scoped>
    
</style>