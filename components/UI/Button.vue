<!-- components/UI/Button.vue -->
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Ok'
  },
  isWhite: {
    type: Boolean,
    default: true
  }
  // width: {
  //   type: Number,
  //   default: 177
  // },
  // height: {
  //   type: Number,
  //   default: 56
  // }
})
</script>

<template>
  <button :class="['button flex-center', { 'button--white': isWhite }]">
    {{ props.text }}
  </button>
</template>

<style scoped lang="scss">
.button {
  width: 177px;
  height: 56px;
  border-radius: 28px;
  background: $white;
  color: $black;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 45px;
  text-wrap: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background: $btn-hover;
  }
  &:active {
    background: $black;
  }
  &--white {
    background: $black;
    color: $white;

    &:hover {
      background: $grey-dark;
    }
    &:active {
      background: $white;
    }
  }
}
@media (max-width: 991px) {
  .button {
    width: 145px;
    height: 45px;
    padding: 7px 34px;
    font-size: 14px;
  }
}
@media (max-width: 600px) {
  .button {
    padding: 2px 23px;
    font-size: 12px;
  }
}
</style>
