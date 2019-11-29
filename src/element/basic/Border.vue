<template>
  <div class="box">
    <div class="content">
      <h4>Basic 基础--border 边框</h4>
      <!-- ============基础布局============ -->
    </div>
    <router-link tag="h3" to="/">返回首页目录</router-link>
  </div>
</template>

<script>
export default {
  name: 'BasicBorder'
}
</script>

<style scoped>
  .box {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
  }
    .content {
      overflow: hidden;
      height: 100%;
      padding-bottom: 60px;
      box-sizing: border-box;
    }
      h4 {
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
    h3 {
      width: 100%;
      position: fixed;
      margin: 0px;
      z-index: 9;
      bottom: 0;
      left: 0px;
      right: 0px;
      color: green;
      height: 60px;
      line-height: 60px;
      text-align: center;
      cursor: pointer;
      background: gray;
    }
</style>
