<template>
<div class="login-container">
  <el-container>
    <el-main>
      <el-form :model="loginForm" label-width="80px">
        <el-form-item>
          <h3 class="title">登录</h3>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button id="loginBtn" @click.native.prevent="handleLogin">
            提交
          </el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</div>
  
</template>

<script>
import { Message } from 'element-ui';

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
      }
    }
  },
  methods: {
    handleLogin() {
      this.$store.dispatch('user/login', this.loginForm)
      .then(() => {
         Message({
            message: '登录成功',
            type: 'success',
            duration: 3000
        })
        this.$router.push({path: '/'})
      })
      .catch(() => {
      })
    }
  }
}

</script>

<style>
.login-container{
  width: 500px;
  margin: 0px auto;
}
.title{
  text-align: center;
}
#loginBtn{
  width: 100%;
}
</style>

