<template>
  <div class="flex flex-col items-start w-90 p-3">
    <p class="font-bold text-lg mb-3">
      最大调用数量默认为20个，这里为方便查看，设置为了5个
    </p>
    <n-button @click="callTimes(6)"  class="mb-3">调用6个会自动关闭的定时组件</n-button>
    <n-button @click="callOne">再调用1次其他组件</n-button>
  </div>
</template>
<script lang="ts" setup>
import { CN } from '../plugin/asyncConnect'

function callTimes(time: number) {
  for (let i = 0; i < time; i++) {
    setTimeout(() => {
      CN.call('autoClear/time')
    }, 300 * i)
  }
}
function callOne() {
  CN.call('autoClear/other')
}
</script>
<style></style>
