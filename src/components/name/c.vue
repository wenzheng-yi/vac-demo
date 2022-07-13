<template>
  <n-drawer v-model:show="data.visible" :width="400">
    <n-drawer-content title="组件c" closable body-style="padding: 0 20px 20px">
      这是组件c
      <template #footer>
        <n-button type="info" size="large" strong @click="cancel">
          取消
        </n-button>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
<script lang="ts" setup>
import {  reactive, ref, toRef } from 'vue'
import { CN } from '../../plugin/asyncConnect'

const data = reactive({
  visible: false,
})
function open() {
  data.visible = true
}

CN.receive({
  name: 'c',
  flag: toRef(data, 'visible'),
  trigger: open,
})

function cancel() {
  data.visible = false
}
</script>
<style lang="less" scoped></style>
