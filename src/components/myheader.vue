<template>
  <div class="header">
      <div class="left">
          <span class="iconfont iconjiantou2" @click='back'></span>
      </div>
      <div class="center">
         <slot></slot>
      </div>
      <div class="left"></div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
.header {
    display: flex;
    height: 70px;
    border-bottom: 3px solid #ccc;
    padding: 0 20px;
    align-items: center;
    font-size: 20px;
    .left {
        width: 70px;
    }
    .center {
        flex: 1;
        text-align: center;
        font-weight: 600;
    }
}
</style>
