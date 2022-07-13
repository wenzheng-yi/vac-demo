<template>
  <div class=" w-80 p-3">
    <p class="font-bold text-lg mb-3">可通过组件名调用组件, 而且是懒加载的</p>
    <n-input v-model:value="name" placeholder="组件名称" class="mb-3"></n-input>
    <n-button @click="callByName">调用</n-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { CN } from '../plugin/asyncConnect'
import type { Connects } from '../plugin/asyncConnect'

const name = ref('')
function callByName() {
  CN.call(name.value as Connects)
}
</script>
<style></style>
