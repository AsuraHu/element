<template>
  <div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span class="bold">Basic 基础</span>
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
        inner: 'Layout 布局',
        index: '1-1',
        router: '/layout'
      }, {
        inner: 'Border 边框',
        index: '1-2',
        router: '/border'
      }, {
        inner: 'Icon 图标',
        index: '1-3',
        router: '/Icon'
      }, {
        inner: 'Button 按钮',
        index: '1-4',
        router: '/Button'
      }, {
        inner: 'Link 文字链接',
        index: '1-5',
        router: '/Link'
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
