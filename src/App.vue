<template>
  <div id="app">
    <el-container class="el-container">
      <el-aside :width="isCollapse ? 'auto' : '200px'"
        ><common-aside
      /></el-aside>
      <el-container>
        <el-header><common-header /></el-header>
        <common-tag></common-tag>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommondHeader'
import CommonTag from '@/components/CommonTag'
export default {
  data() {
    return {}
  },
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse
    },
  },
}
</script>

<style lang="scss">
html,
body,
h3,
p {
  margin: 0;
  padding: 0;
}
.el-header {
  padding: 0 !important;
}
</style>
