<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <h3>后台管理系统</h3>
      <el-menu-item
        v-for="data of noChildrenMenu"
        :key="data.name"
        :index="data.name"
        @click="clickMenu(data)"
      >
        <i :class="`el-icon-${data.icon}`"></i>
        <span slot="title">{{ data.label }}</span>
      </el-menu-item>
      <el-submenu
        v-for="data of haveChildrenMenu"
        :key="data.label"
        :index="data.label"
      >
        <template slot="title">
          <i :class="`el-icon-${data.icon}`"></i>
          <span slot="title">{{ data.label }}</span>
        </template>
        <el-menu-item-group v-for="item of data.children" :key="item.name">
          <el-menu-item @click="clickMenu(item)" :index="item.name">{{
            item.label
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home',
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage',
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage',
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne',
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo',
            },
          ],
        },
      ],
    }
  },
  computed: {
    noChildrenMenu() {
      return this.menuData.filter(item => !item.children)
    },
    haveChildrenMenu() {
      return this.menuData.filter(item => item.children)
    },
  },
  methods: {
    clickMenu(data) {
      console.log(this.$route.path)
      if (
        this.$route.path !== data.path &&
        !(this.$route.path === '/home' && data.path === '/')
      ) {
        this.$router.push(data.path)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.el-menu {
  height: 100vh;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
