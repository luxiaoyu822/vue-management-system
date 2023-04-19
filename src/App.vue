<template>
  <div id="app">
    <el-container>
      <el-aside width="200px"><common-aside /></el-aside>
      <el-container>
        <el-header><common-header /></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommondHeader'
export default {
  data() {
    return {}
  },
  components: {
    CommonAside,
    CommonHeader,
  },
}
</script>

<style lang="scss">
html,
body,
h3 {
  margin: 0;
  padding: 0;
}
.el-header {
  padding: 0 !important;
}
</style>
