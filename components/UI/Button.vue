<!-- components/UI/Button.vue -->
<script setup lang='ts'>
 
 const props = defineProps(['text'])
</script>
 
<template>
  <button class="button flex-center">
    {{ props.text }}
  </button>
</template>
 
<style scoped lang='scss'>
 .button {
  width: 177px;
  height: 56px;
  border-radius: 28px;
  background: $white;
  color: $black;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.2s ease;

  &:hover {
    background: $btn-hover;
  }
  &:active {
    background: $black;
  }
 }
</style>