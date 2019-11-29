<template>
  <div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>Basic 基础</span>
      </template>
      <el-menu-item-group class="color">
        <template slot="title">内容</template>
        <router-link tag="el-menu-item" to="/layout" index="1-1">Layout 布局</router-link>
        <router-link tag="el-menu-item" to="/border" index="1-2">Border 边框</router-link>
        <router-link tag="el-menu-item" to="/Icon" index="1-3">Icon 图标</router-link>
        <router-link tag="el-menu-item" to="/Button" index="1-4">Button 按钮</router-link>
        <router-link tag="el-menu-item" to="/Link" index="1-5">Link 文字链接</router-link>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'HomeBasic'
}
</script>

<style scoped>
  .color {
    color: #fff;
  }
</style>
