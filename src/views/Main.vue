<template>
  <div>
    <el-container class="el-container">
      <el-aside :width="isCollapse ? 'auto' : '200px'"><common-aside/></el-aside>
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
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  components: {
    CommonAside,
    CommonHeader,
    CommonTag,
  },
  computed: {
    ...mapState(['isCollapse'])
  },
}
</script>
