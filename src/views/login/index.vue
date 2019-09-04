<template>
<div class="login-container">
  <el-container>
    <el-main>
      <el-form :model="loginForm">
        <el-form-item>
          <h3 class="title">Login Form</h3>
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

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '1',
        password: '2'
      }
    }
  },
  methods: {
    handleLogin() {
      this.$store.dispatch('user/login', this.loginForm)
      .then(() => {
       // this.$router.push('/login')
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

