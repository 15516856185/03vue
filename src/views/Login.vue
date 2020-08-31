<template>
  <div class="login">
    <myheader>登录</myheader>
    <logo></logo>
    <van-form @submit="login">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="请填写用户名"
        :rules="rules.username"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请填写密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
      <p class="p">没有账号？去<router-link to="register">注册</router-link></p>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          {
            pattern: /^\d{3,6}$/,
            message: '请填写3-6位的数字用户名',
            trigger: 'onChange'
          }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          {
            pattern: /^\d{3,6}$/,
            message: '请填写3-6位的数字密码',
            trigger: 'onChange'
          }
        ]
      }
    }
  },
  methods: {
    async login() {
      const res = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      console.log(res)
      const { statusCode, data } = res.data
      if (statusCode === 200) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('id', data.user.id)
        // console.log(message)
        this.$router.push('/user')
        this.$toast.success('登录成功')
      }
    }
  },
  created() {
    // console.log(this.$route.params)
    const { username, password } = this.$route.params
    this.username = username
    this.password = password
  }
}
</script>

<style lang="less" scoped>
.p {
  float: right;
  font-size: 14px;
  margin: 10px;
  a {
    color: blue;
  }
}
</style>
