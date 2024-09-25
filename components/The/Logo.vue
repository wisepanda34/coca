<!-- components/The/Logo.vue -->
<script setup>
const props = defineProps({
  isWhite: {
    type: Boolean,
    default: false
  }
})
const goToHome = () => navigateTo('/')
</script>

<template>
  <div class="logo" :class="{ white: props.isWhite }" @click="goToHome" />
</template>

<style scoped lang="scss">
.logo {
  content: url(/public/images/logo.png);
  width: 140px;
  height: 66px;
  cursor: pointer;
  transition: filter 0.4s ease;

  &:hover {
    filter: drop-shadow(6px 1px 24px rgb(25, 158, 78));
  }
}
.logo.white {
  content: url(/public/images/logo-white.png);
}
@media (max-width: 900px) {
  .logo {
    width: 112px;
    height: 52px;
  }
}
</style>
