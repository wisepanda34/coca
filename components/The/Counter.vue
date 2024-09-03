<!-- componennts/The/Counter.vue -->
<script setup>
import { useAnimationObserver } from '~/composables/useAnimate'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  endValue: {
    type: Number,
    required: true
  },
  increment: {
    type: Number,
    default: 1
  },
  updateTime: {
    type: Number,
    default: 30
  },
  symbol: {
    type: String,
    default: '+'
  }
})

const counter = ref(0)

const counterGrowth = () => {
  let isIncremented = false

  const incrementValue = () => {
    if (counter.value < props.endValue && !isIncremented) {
      counter.value = Number(counter.value) + Number(props.increment)
      setTimeout(incrementValue, props.updateTime)
    } else {
      counter.value = props.endValue
      isIncremented = true
    }
  }

  incrementValue()
}

const counterRef = useAnimationObserver(counterGrowth, 1)
</script>

<template>
  <div class="counter">
    <h2 ref="counterRef" class="counter__title black">
      {{ counter }}
      <span v-if="counter === props.endValue">{{ props.symbol }}</span>
    </h2>
    <p class="couner__descr">{{ props.text }}</p>
  </div>
</template>

<style scoped lang="scss">
.counter {
  &__title {
    font-size: 64px;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 2vw;
  }
  &__descr {
    font-size: 18px;
    line-height: 178%;
  }
}
@media (max-width: 600px) {
  .counter {
    &__title {
      font-size: 32px;
    }
    &__descr {
      font-size: 16px;
    }
  }
}
</style>
