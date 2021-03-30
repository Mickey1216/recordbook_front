<template>
  <div id="app">
    <router-view />
    <main-tab-bar v-show="!isSinglePage && !barFlag" @click="barClick"/>
    <record-bar v-show="barFlag"/>
  </div>
</template>

<script>
import MainTabBar from 'components/common/tabbar/MainTabBar'
import RecordBar from 'views/detail/RecordBar'
export default {
  name: 'App',
  components: {
    MainTabBar,
    RecordBar
  },
  data(){
    return {
      
    }
  },
  computed:{
    isSinglePage(){
      return this.$store.state.moduleProfile.isSinglePage
    },
    barFlag(){
      return this.$store.state.moduleDetail.barFlag
    }
  },
  methods:{
    barClick(){
      
    }
  }
}
</script>

<style>
/* css样式初始化 */
@import 'assets/css/normalize.css';
</style>