<template>
  <div class="p-10 flex flex-col">
    <router-link to="name" class="text-lg">通过名称调用</router-link>
    <router-link to="param" class="text-lg">
      向组件内方法传参，执行子组件回调事件
    </router-link>
    <router-link to="max" class="text-lg">
      超过最大调用数量后，再调用其他组件，工具会自动进行清理
    </router-link>
    <router-link to="props" class="text-lg">
      可通过props向子组件传参，并绑定事件
    </router-link>
  </div>
</template>
<script lang="ts" setup></script>
