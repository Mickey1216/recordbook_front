import { createStore } from 'vuex'

//局部 
const moduleProfile = {
  state: {
    isSinglePage: true
  },
  mutations: {
    changeSinglePageStatus(state, s){
      state.isSinglePage = s
    }
  }
}

//局部
const moduleDetail = {
  state:{
    barFlag:false,
    statisticsFlag:false
  },
  mutations:{
    changeBarFlag(state,s){
      state.barFlag = s
    },
    changeStatisticsFlag(state,s){
      state.statisticsFlag = s
    }
  }
}

//整体
export default createStore({
  state: {},
  modules: {
    moduleProfile,
    moduleDetail
  }
})
