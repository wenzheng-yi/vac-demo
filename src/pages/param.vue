<template>
  <div class="w-60 p-3">
    <p class="font-bold text-lg mb-3">可向子组件内方法传参</p>
    <n-input
      v-model:value="param.one"
      placeholder="参数1"
      class="mb-3"
    ></n-input>
    <n-input
      v-model:value="param.two"
      placeholder="参数2"
      class="mb-3"
    ></n-input>
    <n-input
      v-model:value="param.three"
      placeholder="参数3"
      class="mb-3"
    ></n-input>

    <n-button @click="postParam">向组件内方法传参</n-button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { CN } from '../plugin/asyncConnect'

const param = reactive({
  one: '',
  two: '',
  three: '',
})
function postParam() {
  CN.call('param/method', Object.values(param))
}
</script>
<style></style>
