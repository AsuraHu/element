<template>
  <div class="box">
    <div class="content">
      <h4>Basic 基础--icon 图标</h4>
      <!-- ============Icon 图标============ -->
      <div>
        <h3>使用方法</h3>
        <p>直接通过设置类名为 el-icon-iconName 来使用即可</p>
        <el-row>
          <el-col class="col" :span="6"><i class="el-icon-edit icon"></i></el-col>
          <el-col class="col" :span="6"><i class="el-icon-share icon"></i></el-col>
          <el-col class="col" :span="6"><i class="el-icon-delete icon"></i></el-col>
          <el-col :span="6"><el-button type="primary" icon="el-icon-search">搜索</el-button></el-col>
        </el-row>
      </div>
    </div>
    <router-link tag="h3" to="/">返回首页目录</router-link>
  </div>
</template>

<script>
export default {
  name: 'BasicIcon'
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
  .icon:before {
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .col {
    text-align: center;
  }
</style>
