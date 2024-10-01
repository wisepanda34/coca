<!-- Round.vue -->
<script setup></script>

<template>
  <div class="round">
    <img src="/svg/round.svg" />
  </div>
</template>

<style scoped lang="scss">
.round {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
  z-index: 100;
  @media (max-width: 991px) {
    width: 50px;
    height: 50px;
  }
}
</style>
