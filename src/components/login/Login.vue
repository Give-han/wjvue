<template>
  <div class="login">
    用户名: <input type="text" placeholder="账号" v-model="loginParam.useraccount">
    <br/>
    密码: <input type="password" placeholder="密码" v-model="loginParam.password">
    <br/>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
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
  text-align: center;
  margin-top: 250px;
  height: 150px;
}
</style>
