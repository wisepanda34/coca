<!-- eslint-disable vue/require-default-prop -->
<!-- UI/ToggleSwitch.vue -->
<script setup>
import { useSwitchStore } from '~/stores/switch.store'

const useSwitch = useSwitchStore()

const props = defineProps({
  label: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="toggle-switch">
    <div class="switch" @click="useSwitch.toggleAnnual">
      <div
        :class="['switch-round', { 'toggle--false': !useSwitch.isSave }]"
      ></div>
    </div>
    <div class="toggle-switch__label">{{ props.label }}</div>
  </div>
</template>

<style scoped lang="scss">
.toggle-switch {
  display: flex;
  justify-content: center;
  gap: 15px;

  &__label {
    font-size: 16px;
    line-height: 24px;
    color: $grey-text-2;
  }
}
.switch {
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background: $blue-light;
  padding: 2px;
  position: relative;

  &-round {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: $blue-primary;
    transition: transform 0.3s ease;
    transform: translateX(20px);

    &.toggle--false {
      transform: translateX(0);
      background: $grey-text;
    }
  }
}
</style>
