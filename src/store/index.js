import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
    tablist: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home',
        url: 'Home/Home',
      },
    ],
  },
  mutations: {
    toggleCollapse(state) {
      state.isCollapse = !state.isCollapse
    },
    selectMenu(state, value) {
      if (value.name !== 'home') {
        const index = state.tablist.findIndex(item => item.name === value.name)
        if (index === -1) {
          state.tablist.push(value)
        }
      }
    },
  },
})
