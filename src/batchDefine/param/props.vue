<template>
  <n-drawer
    v-model:show="isShow"
    :width="400"
    :show-mask="false"
    :mask-closable="false"
  >
    <n-drawer-content
      title="我有props和事件"
      closable
      body-style="padding: 0 20px 20px"
    >
      <p>接收到的props：{{ val }}</p>
      
      <n-input
        v-model:value="emitVal"
        placeholder="emit传回去的参数"
        class="mb-3"
      ></n-input>
      <template #footer>
        <n-button type="primary" size="large" strong @click="sure">
          触发监听事件
        </n-button>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue'
import { CN } from '../../plugin/asyncConnect'
const props = defineProps<{
  val: Ref<string>
}>()
const isShow = ref(false)
function open() {
    isShow.value = true
}

const emit = defineEmits(['ok'])
const emitVal = ref('')
function sure() {
  emit('ok', emitVal.value)
}

CN.receive({
  name: 'param/props',
  flag: isShow,
  trigger: open,
})
</script>
<style lang="less" scoped></style>
