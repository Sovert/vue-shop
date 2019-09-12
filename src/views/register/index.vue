<template>
<div class="register-container">
  <el-container>
    <el-main>
      <el-form :model="registerForm" label-width="80px">
        <el-form-item>
          <h3 class="title">注册</h3>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="registerForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click.native.prevent="handleRegister" id="registerBtn">
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
      .then(() => {
         Message({
            message: '注册成功',
            type: 'success',
            duration: 3000
        })
        this.$router.push('/login')
      })
      .catch(() => {
      })
    }
  }
}

</script>

<style>
.register-container{
  width: 500px;
  margin: 0px auto;
}
.title{
  text-align: center;
}
#registerBtn{
  width: 100%;
}
</style>
