<template>
  <div class="register">
    <myheader>注册</myheader>
    <logo></logo>
    <van-form @submit="register">
      <van-field
        v-model="nickname"
        name="昵称"
        label="昵称"
        placeholder="请注册昵称"
        :rules="rules.nickname"
      />
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请注册用户名"
        :rules="rules.username"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请注册密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
      <p class="p">已有账号 去<router-link to="login">登录</router-link></p>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: '',
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
        ],
        nickname: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          {
            pattern: /^[\u4e00-\u9fa5]{3,6}$/,
            message: '请填写3-6位的汉字昵称',
            trigger: 'onChange'
          }
        ]
      }
    }
  },
  methods: {
    async register() {
      const res = await this.$axios.post('/register', {
        username: this.username,
        nickname: this.nickname,
        password: this.password
      })
      const { statusCode } = res.data
      if (statusCode === 200) {
        this.$toast.success('注册成功')
        this.$router.push({
          name: 'login',
          params: {
            username: this.username,
            password: this.password
          }
        })
      } else {
        this.$toast.fail('注册失败')
      }
    }
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
