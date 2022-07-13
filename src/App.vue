<template>
    <router-view />
    <AsyncConnectRender />
</template>
<script lang="ts" setup>
import { AsyncConnectRender } from './plugin/asyncConnect'
</script>


