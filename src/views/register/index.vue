<template>
<div class="register-container">
  <el-container>
    <el-form :model="registerForm">
      <el-form-item>
        <h3 class="title">register Form</h3>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click.native.prevent="handleRegister">
          注册
        </el-button>
      </el-form-item>
    </el-form>
  </el-container>
</div>
  
</template>

<script>

export default {
  name: 'Register',
  data() {
    return {
      registerForm: {
        username: '1',
        password: '2'
      }
    }
  },
  methods: {
    handleRegister() {
      this.$store.dispatch('user/register', this.registerForm)
    }
  }
}

</script>

<style>

</style>
