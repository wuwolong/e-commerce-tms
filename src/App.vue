<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'
import SvgIcon from '@/components/SvgIcon/index.vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const str = '我爱你'
console.log(str)
</script>

<template>
  <el-config-provider :locale="zhCn">
    <div class="demo"></div>
    <el-pagination layout="prev, pager, next" :total="50" />
    <el-pagination
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
    />
  </el-config-provider>
  <svg-icon name="phone"></svg-icon>
</template>

<style scoped lang="scss">
.demo {
  width: 200px;
  height: 200px;
  border: 1px solid $color;
}
</style>
