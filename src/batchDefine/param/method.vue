<template>
  <n-drawer
    v-model:show="isShow"
    :width="400"
    :show-mask="false"
    :mask-closable="false"
  >
    <n-drawer-content title="子组件" closable body-style="padding: 0 20px 20px">
      <div>
        <p>这是组件内方法接受的参数</p>
        <p>参数1：{{ data.one }}</p>
        <p>参数2：{{ data.two }}</p>
        <p>参数3：{{ data.three }}</p>
      </div>

    </n-drawer-content>
  </n-drawer>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { CN } from '../../plugin/asyncConnect'

const data = reactive({
  one: 0,
  two: 0,
  three: 0,
})
const isShow = ref(false)
function open(param1: any, param2: any, param3: any) {
  data.one = param1
  data.two = param2
  data.three = param3
  isShow.value = true
}

CN.receive({
  name: 'param/method',
  flag: isShow,
  trigger: open,
})
</script>
<style lang="less" scoped></style>
