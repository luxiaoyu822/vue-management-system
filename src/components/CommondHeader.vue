<template>
  <div class="header-container">
    <div class="left-content">
      <i
        v-if="!$store.state.isCollapse"
        @click="handleMenu"
        class="el-icon el-icon-s-fold"
      ></i>
      <i v-else @click="handleMenu" class="el-icon el-icon-s-unfold"></i>
      <span>首页</span>
    </div>
    <div class="right-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="@/assets/images/user.jpg" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleMenu() {
      this.$store.commit('toggleCollapse')
    },
  },
}
</script>
<style lang="scss" scoped>
.header-container {
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .left-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-icon {
      color: white;
      font-size: 30px;
    }
    span {
      font-size: 14px;
      color: white;
      margin-left: 10px;
    }
  }
  .right-content {
    .el-dropdown-link {
      .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
}
</style>
