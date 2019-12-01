<template>
  <div>
    <div>
      <el-row class="tac" type="flex" justify="center">
        <el-col :span="18">
          <h1>目录</h1>
          <el-menu
            :unique-opened=true
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#eee"
            text-color="#000"
            active-text-color="#ffd04b">
            <home-basic></home-basic>
            <home-form></home-form>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HomeBasic from './components/Basic.vue'
import HomeForm from './components/Form.vue'
export default {
  name: 'Home',
  components: {
    HomeBasic,
    HomeForm
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
