<template>
  <div class="w-80 p-3">
    <p class="font-bold text-lg mb-3 whitespace-nowrap">可通过props形式向组件传参，并绑定事件</p>
    <n-input v-model:value="val" placeholder="props参数" class="mb-3"></n-input>
    <n-button @click="call">调用</n-button>

    <n-input
      v-model:value="sonParam"
      placeholder="子组件返回的参数"
      class="mt-3"
    ></n-input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { CN } from '../plugin/asyncConnect'

const val = ref('')
const sonParam = ref('')
function call() {
  // 若希望props具有响应式，则需要传入整个响应式对象
  CN.call('param/props', null, {
    val: val,
    onOk(data: string) {
      sonParam.value = data
    },
  })
}
</script>
<style></style>
