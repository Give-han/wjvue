<template>
  <div class="login">
    <el-form class="login-container"
             label-position="left"
             label-width="0px"
             :rules="rules"
             ref="ruleForm"
             :model="loginParam">
      <el-form-item>
        <el-input type="text"
                  placeholder="账号"
                  v-model="loginParam.useraccount">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password"
                  placeholder="密码"
                  v-model="loginParam.password">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button round @click="login"
                   style="width: 40%"
                   type="primary">登录</el-button>
        <el-button round style="width: 40%"
                   type="primary" >注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      rules: {
        username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        pwd: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      },
      loginParam: {
        useraccount: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.axios.post('/login', {
        useraccount: this.loginParam.useraccount,
        password: this.loginParam.password
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .login {
    height: 100%;
    width: 100%;
    /*脱离标准流*/
    position: fixed;
    background: url("~assets/img/login/bg.jpg");
    background-position: center;
    background-size: cover;
  }
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    background: #fff;
    width: 350px;
    margin: 95px auto;
    padding: 35px 35px 15px 35px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 30px #cac6c6;
  }

  body {
    margin: 0;
  }
</style>
