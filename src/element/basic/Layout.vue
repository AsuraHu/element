<template>
  <div class="box">
    <div class="content">
      <h4>Basic 基础--layout 布局</h4>
      <!-- ============基础布局============ -->
      <div class="item">
        <p class="title">基础布局</p>
        <div>
          <el-row>
            <el-col :span="8">
              <div class="grid-content bg-purple-red">red 8/24</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-black">black 8/24</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-blue">blue 8/24</div>
            </el-col>
          </el-row>
        </div>
        <hr>
      </div>
      <!-- ============分栏间隔============ -->
      <div class="item">
        <p class="title">分栏间隔</p>
        <div>
          <!-- gutter实现的元素之间的距离，通过设置el-col标签的padding-left和
          padding-right 的值实现的 -->
          <el-row :gutter="10">
            <el-col :span="8">
              <div class="grid-content bg-purple-red">red 8/24</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-black">black 8/24</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-blue">blue 8/24</div>
            </el-col>
          </el-row>
        </div>
        <hr>
      </div>
      <!-- ============混合布局============ -->
      <div class="item">
        <p class="title">混合布局</p>
        <div>
          通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局
        </div>
        <div>
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="grid-content bg-purple-red">red 4/24</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-black">black 8/24</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-blue">blue 12/24</div>
            </el-col>
          </el-row>
        </div>
        <hr>
      </div>
      <!-- ============分栏偏移============ -->
      <div class="item">
        <p class="title">分栏偏移</p>
        <div>
          支持偏移指定的栏数
        </div>
        <div>
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="grid-content bg-purple-red">red 4/24</div>
            </el-col>
            <!-- 通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数 -->
            <el-col :span="8" :offset="4">
              <div class="grid-content bg-purple-black">black 8/24</div>
            </el-col>
          </el-row>
        </div>
        <hr>
      </div>
      <!-- ============对齐方式============ -->
      <div class="item">
        <p class="title">对齐方式</p>
        <div>
          通过 flex 布局来对分栏进行灵活的对齐
        </div>
        <div>
          <!-- 将 type 属性赋值为 'flex'，可以启用 flex 布局，
            并可通过 justify 属性来指定 start, center, end,
            space-between, space-around 其中的值来定义子元素的排版方式 -->
          <el-row type="flex" justify="space-around">
            <el-col :span="4">
              <div class="grid-content bg-purple-red">red 4/24</div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple-black">black 4/24</div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple-blue">blue 4/24</div>
            </el-col>
          </el-row>
        </div>
        <hr>
      </div>
      <!-- ============响应式布局============ -->
      <div class="item">
        <p class="title">响应式布局</p>
        <div>
          参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl
        </div>
        <div>
          <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
              <div class="grid-content bg-purple-red">red</div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
              <div class="grid-content bg-purple-black">black</div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
              <div class="grid-content bg-black">black</div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
              <div class="grid-content bg-purple-blue">blue</div>
            </el-col>
          </el-row>
        </div>
        <hr>
      </div>
    </div>
    <router-link tag="h3" to="/">返回首页目录</router-link>
  </div>
</template>

<script>
export default {
  name: 'BasicLayout'
}
</script>

<style scoped>
  html, body {
    width: 100%;
    padding: 0;
    margin: 0;
  }
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
      .item {
        margin: 20px 0px;
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
  .title {
    display: inline-block;
    background: orange;
    margin: 10px 0;
  }
  .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-red {
      background: #f00;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-black {
      background: black;
    }
    .bg-purple-blue {
      background: blue;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
      line-height: 36px;
      text-align: center;
      color: #fff;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
</style>
