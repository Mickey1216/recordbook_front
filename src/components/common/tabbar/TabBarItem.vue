<template>
  <div class="tab-bar-item" @click="itemClick">
      <div><slot name="item-icon"></slot></div>
      <div><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
      path:String
  },
  methods:{
      itemClick(){
          //this.$router.push(this.path)
          this.$router.replace(this.path)
      }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
  font-size: 14px;
}
</style>