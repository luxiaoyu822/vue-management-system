<template>
  <div class="tags">
    <el-tag
      v-for="(item, index) of tablist"
      :key="item.path"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeTags(item)"
      @close="closeTags(item, index)"
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
  mounted() {},
  computed: {
    ...mapState(['tablist']),
  },
  methods: {
    ...mapMutations(['closeTagMenu']),
    changeTags(data) {
      if (
        this.$route.path !== data.path &&
        !(this.$route.path === '/home' && data.path === '/')
      ) {
        this.$router.push(data.path)
      }
    },
    closeTags(data, index) {
      this.closeTagMenu(index)
      if (this.$route.name !== data.name) {
        return
      }
      if(index===this.tablist.length){
        this.$router.push({
            name:this.tablist[index-1].name
        })
      } else {
        this.$router.push({
            name:this.tablist[index].name
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.tags{
    padding: 10px 20px;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>
