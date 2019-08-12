<template>
<div class="login-container">
  <el-container>
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
        <el-button>
          提交
        </el-button>
      </el-form-item>
    </el-form>
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
  }
}

</script>

<style>

</style>
