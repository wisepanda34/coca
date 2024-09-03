<!-- Partners.vue -->
<script setup>
import { partners } from '~/constants'
import { useAnimationObserver } from '~/composables/useAnimate'
import { addAnimation } from '~/utils/animate.js'

const partnersLeftRef = useAnimationObserver(addAnimation, 1)
const partnersRightRef = useAnimationObserver(addAnimation, 1)
</script>

<template>
  <section class="partners">
    <div class="container">
      <div class="partners__wrapper">
        <div ref="partnersLeftRef" class="partners__left animate-from-left">
          <TheCounter
            text="Some big companies that we work with, and trust us very much"
            :end-value="890"
            :increment="20"
            :update-time="20"
          />
        </div>
        <div ref="partnersRightRef" class="partners__right animate-from-right">
          <div
            v-for="(brand, index) in partners"
            :key="index"
            class="partners__brand"
          >
            <NuxtImg :src="brand.src" :alt="brand.name" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.partners {
  &__wrapper {
    padding: 24px 0;

    display: flex;
    justify-content: center;
    gap: 50px;
  }
  &__right {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 24px;
    grid-row: auto;
  }
  &__brand {
    width: 160px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 991px) {
  .partners {
    &__wrapper {
      flex-direction: column;
    }
    &__left {
      margin: 0 auto;
    }
  }
}
@media (max-width: 750px) {
  .partners {
    &__wrapper {
      gap: 24px;
    }
    &__right {
      grid-template-columns: 1fr 1fr;
    }
    &__brand {
      width: 100%;
      margin: 0 auto;
      img {
        max-width: 160px;
      }
    }
  }
}
</style>
