<template>
  <div class="box">
    <div class="content">
      <h4>Basic 基础--button 按钮</h4>
      <!-- ============ button 按钮 ============ -->
      <div>
        <h5>基础用法</h5>
        <p>基础的按钮用法</p>
        <el-row class="margin">
          <!-- 使用type、plain、round和circle属性来定义 Button 的样式 -->
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
        </el-row>
        <el-row class="margin">
          <el-button plain>素朴按钮</el-button>
          <el-button plain type="success">素朴按钮</el-button>
        </el-row>
        <el-row class="margin">
          <el-button round>圆角按钮</el-button>
          <el-button round type="danger">危险按钮</el-button>
        </el-row>
        <el-row class="margin">
          <p>圆形图标按钮</p>
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
          <hr>
        </el-row>
      </div>
      <!-- ============ 禁用按钮 ============ -->
      <div>
        <h5>禁用按钮</h5>
        <p>按钮不可用状态</p>
        <el-row class="margin">
          <!-- 使用disabled属性来定义按钮是否可用，它接受一个Boolean值 -->
          <el-button>默认按钮</el-button>
          <el-button type="primary" disabled>主要按钮</el-button>
        </el-row>
        <el-row class="margin">
          <el-button plain>素朴按钮</el-button>
          <el-button plain type="success" disabled>素朴按钮</el-button>
        </el-row>
        <el-row class="margin">
          <el-button round>圆角按钮</el-button>
          <el-button round type="danger" disabled>危险按钮</el-button>
        </el-row>
        <el-row class="margin">
          <p>圆形图标按钮</p>
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle disabled></el-button>
          <hr>
        </el-row>
      </div>
      <!-- ============ 文字按钮 ============ -->
      <div>
        <h5>文字按钮</h5>
        <p>没有边框和背景的按钮</p>
        <el-row class="margin">
          <el-button type="text">文字按钮</el-button>
          <el-button type="text" disabled>文字按钮</el-button>
          <hr>
        </el-row>
      </div>
      <!-- ============ 图标按钮 ============ -->
      <div>
        <div>
          <h5>图标按钮</h5>
          <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）</p>
          <!-- 设置icon属性即可，icon 的列表可以参考 Element 的 icon 组件，
            也可以设置在文字右边的 icon ，只要使用i标签即可，可以使用自定义图标。 -->
          <el-row class="margin">
            <el-button type="primary" icon="el-icon-delete">删除</el-button>
            <el-button type="primary" icon="el-icon-upload">上传</el-button>
            <hr>
          </el-row>
        </div>
      </div>
      <!-- ============ 按钮组 ============ -->
      <div>
        <div>
          <h5>按钮组</h5>
          <p>以按钮组的方式出现，常用于多项类似操作</p>
          <!-- 使用<el-button-group>标签来嵌套你的按钮 -->
          <el-button-group class="margin">
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-button-group>
        </div>
      </div>
      <!-- ============ 加载中 ============ -->
      <div>
        <div>
          <h5>加载中</h5>
          <p>点击按钮后进行数据加载操作，在按钮上显示加载状态</p>
          <!-- 要设置为 loading 状态，只要设置loading属性为true即可 -->
          <el-button class="margin" type="primary" :loading="true">加载中</el-button>
        </div>
      </div>
      <!-- ============ 不同尺寸 ============ -->
      <div>
        <div>
          <h5>不同尺寸</h5>
          <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸</p>
          <!-- 额外的尺寸：medium、small、mini，通过设置size属性来配置它们 -->
          <el-button type="primary" autofocus="true">默认大小</el-button>
          <el-button size="medium" type="primary">中等：medium</el-button>
          <el-button size="small" type="primary">小型：small</el-button>
          <el-button size="mini" type="primary">超小型：mini</el-button>
        </div>
      </div>
    </div>
    <router-link tag="h3" to="/">返回首页目录</router-link>
  </div>
</template>

<script>
export default {
  name: 'BasicButton'
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
