<template>
  <n-drawer v-model:show="isShow" :width="400">
    <n-drawer-content title="组件a" closable body-style="padding: 0 20px 20px">
      这是组件a
      <template #footer>
        <n-button type="info" size="large" strong @click="cancel">
          取消
        </n-button>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { CN } from '../../plugin/asyncConnect'

const isShow = ref(false)
function open() {
  isShow.value = true
}
CN.receive({
  name: 'a',
  flag: isShow,
  trigger: open,
})

function cancel() {
  isShow.value = false
}
const emit = defineEmits(['ok'])
</script>
<style lang="less" scoped></style>
