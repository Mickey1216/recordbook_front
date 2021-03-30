<template>
  <div class="list">
    <div class="ct" v-for="(item, index) in totalArr" :key="index">
      <list-item :picSrc="item.picSrc" :text="item.text" :jumpTo="item.jumpTo" />
    </div>
    
  </div>
</template>

<script>
import ListItem from 'views/profile/ListItem'
export default {
    name:'List',
    components:{
      ListItem
    },
    data(){
      return {
        totalArr:[
          {picSrc:require('../../assets/img/profile/editpsw.png'), text:'修改密码',jumpTo:'editpsw'},
          {picSrc:require('../../assets/img/profile/about.png'),text:'关于我们', jumpTo: 'about'},
          {picSrc:require('../../assets/img/profile/help.png'),text:'帮助',jumpTo:'help'},
          {picSrc:require('../../assets/img/profile/privacy.png'),text:'隐私协议',jumpTo:'privacy'}
        ]
      }
    }
}
</script>

<style scoped>
.list{
  margin:40px 0px;
}
</style>