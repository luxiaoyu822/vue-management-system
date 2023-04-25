<template>
  <div class="login-container" autocomplete="off">
    <el-form ref="loginForm" :inline="true" :model="form" :rules="rules">
      <h3 class="login-title">后台管理系统</h3>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" class="password-label" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <div class="login-button">
        <div class="remember-check">
          <el-checkbox
            label="记住我"
            v-model="isRemember"
            name="remember"
          ></el-checkbox>
        </div>
        <div class="button">
          <el-button @click="submit" type="primary">登录</el-button>
          <el-button type="primary">注册</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
import Cookie from 'js-cookie'
import { getMenu } from '@/api'
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      isRemember: false,
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    submit() {
      //   const token = Mock.Random.guid()
      //token信息存入cookie,用于不同页面之间的通信
      //   Cookie.set('token', token)
      //   this.$router.push('/home')
      //form表单校验通过
      this.$refs.loginForm.validate(vali => {
        if (vali) {
          getMenu(this.form).then(({ data }) => {
            // console.log(data)
            if (data.code === 20000) {
              Cookie.set('token', data.data.token)
              Cookie.set('role',data.data.role)
              this.$message.success(data.data.message)
              //获取菜单权限数据，存入vuex
              this.$router.push('/home')
              this.$store.commit('setMenu',data.data.menu)
            } else {
              this.$message.error(data.data.message)
            }
          })
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.login-container {
  box-sizing: border-box;
  width: 22%;
  margin: 180px auto;
  border: 1px solid #eaeaea;
  background-color: #eaeaea;
  padding: 35px 35px 15px;
  background-color: #eeeeee;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  ::v-deep .el-form-item__label {
    text-align: left;
    width: 90px;
  }
  .el-input {
    width: 300px;
  }
  .login-title {
    text-align: center;
    margin-bottom: 20px;
  }
  .login-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    .remember-check {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
    .button {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }
}
</style>
