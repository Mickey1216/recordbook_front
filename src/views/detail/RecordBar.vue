<template>
  <div class="recordBar">
    <tab-bar>
      <tab-bar-item path="/detail" @click="detailClick">
        <template v-slot:item-icon>
          <img src="~assets/img/detail/detail.png" alt />
        </template>
        <template v-slot:item-text>
          <div>明细</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/detail/statistics">
        <template v-slot:item-icon>
          <img src="~assets/img/detail/statistics.png" alt />
        </template>
        <template v-slot:item-text>
          <div>统计</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "RecordBar",
  components: {
    TabBar,
    TabBarItem
  },
  methods: {
    detailClick(){
        this.$store.commit("changeBarFlag", true)
        this.$store.commit('changeStatisticsFlag', false)
    }
  }
};
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