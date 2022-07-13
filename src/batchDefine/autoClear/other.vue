<template>
  <n-modal
    v-model:show="isShow"
    :width="400"
    preset="dialog"
    title="注意看右侧"
  >
    当我出现时，之前的子组件都被清理掉了-> -> -> -> ->
  </n-modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { CN } from '../../plugin/asyncConnect'

const isShow = ref(false)
function open() {
  isShow.value = true
}

CN.receive({
  name: 'autoClear/other',
  flag: isShow,
  trigger: open,
})
</script>
<style lang="less" scoped></style>
