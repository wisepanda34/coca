<!-- Advertize.vue -->
<script setup>
import { advertizes } from '~/constants';
import { useAnimationObserver } from '~/composables/useAnimate';
import {addAnimation} from '~/utils/animate.js'
 
const advertizeRef = useAnimationObserver(addAnimation, 0.2);  
</script>
 
<template>
  <section class="advertize">
    <div class="container">
      <div class="advertize__wrapper">
        <h3 class="advertize__title title-h3">Advertise, analyze, and optimize! We do it all for you</h3>
        <p class="advertize__motto motto">Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster</p>
        <div ref="advertizeRef" class="advertize__advantages animate-up" >
          <div v-for="(item, index) in advertizes" :key="index" class="advertize__block" >
            <div class="advertize__block-image">
              <NuxtImg :src="item.imageLink" :alt="item.imageLink"/>
              <div class="advertize__block-round flex-center">
                <NuxtImg :src="item.icon"/>
              </div>
            </div>
            <div class="advertize__block-content">
              <h4 class="title-h4">{{ item.title }}</h4>
              <p class="motto">{{ item.motto }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
 
<style scoped lang='scss'>
 .advertize {
  &__wrapper {
    padding: 160px 0 100px;
  }
  &__title {
    max-width: 600px;
  }
  &__motto {
    max-width: 460px;
  }
  &__advantages {
    margin-top: 8vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5vw;
    row-gap: 4vw;
  }
  &__block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4vw;

    &-image {
      position: relative;
      max-width: 400px;
    }
    &-round {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: rgba(22, 26, 52, 0.7);
      opacity: 0.8;

     img {
      width: 24px;
      height: 24px;
      object-fit: contain;
     } 
    }
  }
 }
 @media (max-width: 991px) {
  .advertize {
    &__wrapper {
      padding: 5vw 0;
    }
    &__advantages {
      grid-template-columns: 1fr;
    }
  }
 }
 @media (max-width: 600px) {
  .advertize {
    &__block-round {
      top: 15px;
      right: 15px;
      width: 30px;
      height: 30px;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
 }
</style>