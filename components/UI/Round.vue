<!-- Round.vue -->
<script setup></script>

<template>
  <div class="round" />
</template>

<style scoped lang="scss">
.round {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
  background-image: url('/svg/round.svg');
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 100;
  @media (max-width: 991px) {
    width: 50px;
    height: 50px;
  }
}
</style>
