<!-- Passion.vue -->
<script setup>
import { useAnimationObserver } from '~/composables/useAnimate';
import {addAnimation} from '~/utils/animate.js'
 
const passionRef = useAnimationObserver(addAnimation);   
</script>
 
<template>
  <section class="passion">
    <div class="container">
      <div class="passion__wrapper">
        <div ref="passionRef" class="passion__left animate-from-left">
          <NuxtImg src="/images/passion.png"/>
        </div>

        <div class="passion__right">
          <h3 class="title-h3">Passion to increase company revenue up to 85%</h3>
          <div class="passion__motto">Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging</div>
          <ul class="passion__list">
            <li>Close more deals with single - page contact managment</li>
            <li>Enjoy one-click calling, call scripts and voicemail automation</li>
            <li>Take stages and milestones of your deals to keep the sales process an track</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
 
<style scoped lang='scss'>
 .passion {
  &__wrapper {
    padding: 160px 0 90px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    column-gap: 5vw;
  }
  &__left {
    box-shadow: $shadow-1;
  }
  &__right {
    font-size: 18px;
    line-height: 1.78;
  }
  &__motto {
    max-width: 400px;
    color: $grey-text-2;
  }
  &__list {
    max-width: 400px;
    margin-top: 40px;
    li {
      position: relative;
      padding: 16px 0 16px 44px;
      &::before {
        position: absolute;
        content: url(/public/svg/passion.svg);
        position: absolute;
        width: 24px;
        height: 24px;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
  }
 }
 @media (max-width: 991px) {
  .passion {
    &__wrapper {
      padding: 8vw 0 4vw;
      grid-template-columns: 1fr;
      row-gap: 8vw;
    }
    &__right {
      width: 80%;
      margin: 0 auto;
    }
    &__motto {
      max-width: 100%;
    }
    &__list {
      margin: 0 auto;
    }
  }
 }
 @media (max-width: 600px) {
  .passion {
    &__right {
      width: 100%;
    }
  }
 }
</style>