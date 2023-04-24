import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      reducer: state => {
        return {
          menuData: state.menuData,
        }
      },
    }),
  ],
  state: {
    isCollapse: false,
    menuData: [],
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
    closeTagMenu(state, item) {
      state.tablist.splice(item, 1)
    },
    setMenu(state, value) {
      state.menuData = value
    },
  },
})
