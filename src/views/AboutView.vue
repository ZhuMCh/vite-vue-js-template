<template>关于</template>

<script setup>
import { useCounterStore, useUserStore } from '@/store/index';

useCounterStore().count = 3;
useUserStore().age = 16;
useUserStore().setAge(18);
console.log(useCounterStore().count, useUserStore().age);
</script>
