<template>
  <div>
    <div>
      <el-row class="tac" type="flex" justify="center">
        <el-col :span="18">
          <h1>目录</h1>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <home-basic></home-basic>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HomeBasic from './components/Basic.vue'
export default {
  name: 'Home',
  components: {
    HomeBasic
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
  h1 {text-align: center}
</style>
