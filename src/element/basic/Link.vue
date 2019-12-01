<template>
  <div class="box">
    <div class="content">
      <h4>Basic 基础--link 链接</h4>
      <!-- ============ 基础用法 ============ -->
      <div>
        <h5>基础用法</h5>
        <p>基础的文字链接用法</p>
        <div>
          <el-link href="https://element.eleme.io" target="_blank">默认</el-link>
          <el-link type="primary">主要</el-link>
          <el-link type="success">成功</el-link>
          <el-link type="danger">危险</el-link>
        </div>
        <hr>
      </div>
      <!-- ============ 禁用状态 ============ -->
      <div>
        <h5>禁用状态</h5>
        <p>文字链接不可用</p>
        <div>
          <el-link>默认</el-link>
          <el-link type="primary" disabled>主要</el-link>
          <el-link type="success" disabled>成功</el-link>
          <el-link type="danger" disabled>危险</el-link>
        </div>
        <hr>
      </div>
      <!-- ============ 下划线 ============ -->
      <div>
        <h5>下划线</h5>
        <p>文字链接有无下划线</p>
        <div>
          <el-link>默认-有下划线</el-link>
          <el-link type="primary" :underline="false">主要-无下划线</el-link>
          <el-link type="success">成功-有下划线</el-link>
          <el-link type="danger" :underline="false">危险-无下划线</el-link>
        </div>
        <hr>
      </div>
      <!-- ============ 带图标的链接 ============ -->
      <div>
        <h5>带图标的链接</h5>
        <p>带图标的文字链接可增强辨识度</p>
        <div>
          <el-link icon="el-icon-edit">编辑</el-link>
          <el-link :underline="false">查看<i class="el-icon-view el-icon--right"></i></el-link>
        </div>
        <hr>
      </div>
    </div>
    <router-link tag="h3" to="/">返回首页目录</router-link>
  </div>
</template>

<script>
export default {
  name: 'BasicLink'
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
      background-color: gray;
    }
      h5 {
        font-size: 20px;
        background-color: orange;
      }
/* -------------------------------------------- */
  hr {
    height: 30px;
    margin: 30px 0 0 0;
  }
  p {
    margin: 0 0 10px 0;
  }
  .margin {
    margin: 10px 0;
  }
</style>
