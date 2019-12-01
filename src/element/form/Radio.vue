<template>
  <div class="box">
    <div class="content">
      <h4>Form 表单--radio 单选框</h4>
      <!-- ============ 基础用法 ============ -->
      <div>
        <h5>基础用法</h5>
        <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器</p>
        <div>
          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
        </div>
        <hr>
      </div>
      <!-- ============ 禁用状态 ============ -->
      <div>
        <h5>禁用状态</h5>
        <p>单选框不可用的状态</p>
        <div>
          <!-- 只要在el-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用 -->
          <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
          <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
        </div>
        <hr>
      </div>
      <!-- ============ 单选框组 ============ -->
      <div>
        <h5>单选框组</h5>
        <p>单选框不可用的状态</p>
        <el-radio-group v-model="radio2">
          <!-- 结合el-radio-group元素和子元素el-radio可以实现单选组，
            在el-radio-group中绑定v-model，在el-radio中设置好label即可，
            无需再给每一个el-radio绑定变量，另外，还提供了change事件来响应变化，
            它会传入一个参数value -->
          <el-radio label="3">备选项</el-radio>
          <el-radio label="6">备选项</el-radio>
          <el-radio label="9">备选项</el-radio>
        </el-radio-group>
        <hr>
      </div>
      <!-- ============ 按钮样式 ============ -->
      <div>
        <h5>按钮样式</h5>
        <p>按钮样式的单选组合</p>
        <el-radio-group v-model="radio3" size="mini">
          <!-- 只需要把el-radio元素换成el-radio-button元素即可，
            此外，Element 还提供了size属性 -->
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button disabled label="上海"></el-radio-button>
          <el-radio-button label="天津"></el-radio-button>
        </el-radio-group>
        <hr>
      </div>
      <!-- ============ 带边框 ============ -->
      <div>
        <h5>带边框</h5>
        <p>设置border属性可以渲染为带有边框的单选框</p>
        <el-radio-group v-model="radio3" size="medium" border>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button disabled label="上海"></el-radio-button>
          <el-radio-button label="天津"></el-radio-button>
          <el-radio label="广州" border></el-radio>
          <el-radio label="深圳" border></el-radio>
        </el-radio-group>
        <hr>
      </div>
    </div>
    <router-link tag="h3" to="/">返回首页目录</router-link>
  </div>
</template>

<script>
export default {
  name: 'FormRadio',
  data () {
    return {
      radio: '1',
      radio1: '选中且禁用',
      radio2: '9',
      radio3: '上海'
    }
  }
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
  hr {
    height: 30px;
    margin: 30px 0 0 0;
  }
/* -------------------------------------------- */
</style>
