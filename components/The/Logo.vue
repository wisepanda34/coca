<!-- components/The/Logo.vue -->
<script setup lang='ts'>
 const goToHome = () => navigateTo('/')

</script>
 
<template>
  <div class="logo" @click="goToHome"> </div>
</template>
 
<style scoped lang='scss'>
 .logo {
  cursor: pointer;
   content: url(/public/images/logo.png);
   width: 140px;
   height: 66px;
 }
 @media (max-width: 900px) {
  .logo {
    width: 112px;
    height: 52px;
  }
 }
</style>