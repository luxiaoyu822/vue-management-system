<template>
  <div class="forbidden-container">
    <div class="forbidden-text">您无权访问此页面</div>
    <div class="forbidden-back">将在{{ count }}秒钟后返回主页面</div>
    <el-button type="info" @click="backHome">返回主页面</el-button>
  </div>
</template>
、
<script>
export default {
  data() {
    return {
      count: 5,
    }
  },
  mounted() {
    this.countDown()
  },
  methods: {
    backHome() {
      this.$router.push('/home')
    },
    countDown() {
      let timer = setInterval(() => {
        this.count--
        if (this.count <= 0) {
          clearInterval(timer)
          this.$router.push('/home')
        }
      }, 1000)
    },
  },
}
</script>
<style lang="scss" scoped>
.forbidden-container {
  width: 50%;
  margin: 200px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  .forbidden-text {
    font-size: 80px;
    color: skyblue;
    margin-bottom: 20px;
  }
  .forbidden-back {
    font-size: 50px;
    color: skyblue;
    margin-bottom: 40px;
  }
  .el-button {
    width: 15%;
    margin: 0 auto;
  }
}
</style>
