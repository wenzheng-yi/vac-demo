<template>
  <n-drawer v-model:show="isShow" :width="400">
    <n-drawer-content title="组件b" closable body-style="padding: 0 20px 20px">
      这是组件b
      <template #footer>
        <n-button type="info" size="large" strong @click="cancel">
          取消
        </n-button>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { CN } from '../../plugin/asyncConnect'

const isShow = ref(false)
function open() {
  isShow.value = true
}

CN.receive({
  name: 'b',
  flag: isShow,
  trigger: open,
})
function cancel() {
  isShow.value = false
}
</script>
<style lang="less" scoped></style>
