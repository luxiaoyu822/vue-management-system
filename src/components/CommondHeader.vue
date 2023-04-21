<template>
  <div class="header-container">
    <div class="left-content">
      <i
        v-if="!$store.state.isCollapse"
        @click="handleMenu"
        class="el-icon el-icon-s-fold"
      ></i>
      <i v-else @click="handleMenu" class="el-icon el-icon-s-unfold"></i>
      <div class="text">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            :to="{ path: data.path }"
            v-for="data of tablist"
            :key="data.path"
            >{{ data.label }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
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
import { mapState } from 'vuex'
export default {
  methods: {
    handleMenu() {
      this.$store.commit('toggleCollapse')
    },
  },
  computed: {
    ...mapState(['tablist']),
  },
  mounted() {},
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
    ::v-deep .el-breadcrumb__item {
      .el-breadcrumb__inner {
        font-weight: normal;
        color: #666;
      }
    }
    .el-icon {
      color: white;
      font-size: 30px;
    }
    .text {
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
