<template>
  <n-drawer v-model:show="isShow" :width="400">
    <n-drawer-content title="定时组件" closable body-style="padding: 0 20px 20px">
      我会在3秒后自动关闭
      <template #footer>
        <n-button type="info" size="large" strong @click="cancel">
          取消
        </n-button>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { CN } from '../../plugin/asyncConnect'

const isShow = ref(false)
function open() {
  isShow.value = true
  setTimeout(() => {
    isShow.value = false
  }, 3000) 
}

CN.receive({
  name: 'autoClear/time',
  flag: isShow,
  trigger: open,
})
function cancel() {
  isShow.value = false
}
</script>
<style lang="less" scoped></style>
