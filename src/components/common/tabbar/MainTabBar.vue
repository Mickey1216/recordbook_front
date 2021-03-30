<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/detail">
                <template v-slot:item-icon>
                    <img src="~assets/img/tabbar/detail.png" alt="">
                </template>
                <template v-slot:item-text>
                    <div>明细</div>
                </template>
            </tab-bar-item>

            <tab-bar-item path="/add">
                <template v-slot:item-icon>
                    <img src="~assets/img/tabbar/add.png" alt="">
                </template>
                <template v-slot:item-text>
                    <div>记账</div>
                </template>
            </tab-bar-item>

            <tab-bar-item path="/profile">
                <template v-slot:item-icon>
                    <img src="~assets/img/tabbar/profile.png" alt="">
                </template>
                <template v-slot:item-text>
                    <div>我的</div>
                </template>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  /* 除掉图片默认的三像素 */
  vertical-align: middle; 
  margin-bottom: 2px;
}
</style>