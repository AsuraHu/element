<template>
  <div>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span class="bold">Form 表单</span>
      </template>
      <el-menu-item-group class="color">
        <template slot="title">内容</template>
        <router-link
          class="color"
          v-for="item of list"
          :key="item.index"
          tag="el-menu-item"
          :to="item.router"
          :index="item.index"
        >
        {{item.inner}}
        </router-link>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'HomeBasic',
  data () {
    return {
      list: [{
        inner: 'Radio 单选框',
        index: '2-1',
        router: '/radio'
      }, {
        inner: 'Checkbox 多选框',
        index: '2-2',
        router: '/checkbox'
      }, {
        inner: 'Input 输入框',
        index: '2-3',
        router: '/input'
      }, {
        inner: 'InputNumber 计数器',
        index: '2-4',
        router: '/inputNumber'
      }, {
        inner: 'Select 选择器',
        index: '2-5',
        router: '/select'
      }, {
        inner: 'Cascader 级联选择器',
        index: '2-6',
        router: '/cascader'
      }, {
        inner: 'Switch 开关',
        index: '2-7',
        router: '/switch'
      }, {
        inner: 'Slider 滑块',
        index: '2-8',
        router: '/slider'
      }, {
        inner: 'TimePicker 时间选择器',
        index: '2-9',
        router: '/timepicker'
      }, {
        inner: 'DataPicker 日期选择器',
        index: '2-10',
        router: 'dataPicker'
      }, {
        inner: 'DataTimePicker 日期时间选择器',
        index: '2-11',
        router: '/dataTimePicker'
      }, {
        inner: 'Upload 上传',
        index: '2-12',
        router: '/upload'
      }, {
        inner: 'Rate 评分',
        index: '2-13',
        router: '/rate'
      }, {
        inner: 'ColorPicker 颜色选择器',
        index: '2-14',
        router: '/colorPicker'
      }, {
        inner: 'Transfer 穿梭框',
        index: '2-15',
        router: '/transfer'
      }, {
        inner: 'Formform 表单',
        index: '2-16',
        router: '/formform'
      }]
    }
  }
}
</script>

<style scoped>
  .color {
    color: #fff;
  }
  .bold {
    font-weight: bold;
  }
</style>
