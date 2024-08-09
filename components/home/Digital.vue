<!-- components/home/Digital.vue -->
<script setup>
import { useAnimationObserver } from '~/composables/useAnimate'
import { addAnimation } from '~/utils/animate.js'

const digitalRef = useAnimationObserver(addAnimation, 0.1)
</script>

<template>
  <section class="digital">
    <div class="container">
      <div class="digital__wrapper">
        <div class="digital__left">
          <h1 class="title-h1">Digitally forward creative</h1>
          <p class="slogan">
            Our biggest challenge is making sure we're always designing and
            building products that will help you run your business better.
          </p>
          <div class="digital__email">
            <input type="email" placeholder="Enter your email" />
            <UIButton text="Try for free" />
          </div>
        </div>

        <div ref="digitalRef" class="digital__right animate-from-right">
          <div class="digital__grafic">
            <div class="digital__growth" />
          </div>
          <div class="digital__statistic" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.digital {
  &__wrapper {
    position: relative;
    min-height: 650px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 70px 0 70px;
    &::before {
      content: '';
      position: absolute;
      top: -20%;
      left: 5%;
      width: 100%;
      height: 100%;
      background-image: url('/images/bg-orange.png');
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -1;
    }
  }
  &__left {
    flex: 0 1 50%;
  }
  &__email {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;

    input {
      max-width: 280px;
      min-width: 150px;
      height: 56px;
      border: 1px solid $grey-border;
      border-top: none;
      border-left: none;
      border-right: none;
    }
  }

  &__right {
    flex: 0 1 50%;
    padding: 25px 50px 0 0;
    width: 470px;
  }
  &__grafic {
    position: relative;
    width: 420px;
    height: 346px;
    margin: 0 0 0 auto;
    background-image: url('/images/sales.png');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: $shadow-1;
    z-index: 2;

    &::before {
      content: '';
      position: absolute;
      top: 20%;
      left: 70%;
      width: 100%;
      height: 100%;
      background-image: url('/public/images/bg-green.png');
      background-size: contain;
      background-repeat: no-repeat;
      z-index: 1;
    }
  }
  &__growth {
    position: absolute;
    top: -50px;
    right: -130px;
    width: 213px;
    height: 220px;
    background-image: url('/images/growth.png');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: $shadow-1;
    z-index: 2;
  }
  &__statistic {
    position: relative;
    width: 420px;
    height: 120px;
    margin: 30px 0 0 auto;
    background-image: url('/images/statistic.png');
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 2;
  }
}
@media (max-width: 1439px) {
  .digital {
    &__grafic {
      margin: 0 80px 0 auto;
    }
    &__statistic {
      margin: 30px 80px 0 auto;
    }
  }
}
@media (max-width: 1179px) {
  .digital {
    &__wrapper {
      padding: 4vw 0;
      flex-direction: column;
      gap: 70px;
    }
    &__email {
      justify-content: center;
    }
    &__right {
      width: 100%;
    }
    &__grafic {
      margin: 0 auto;
    }
    &__statistic {
      margin: 30px auto 0;
    }
  }
}
@media (max-width: 991px) {
  .digital {
    &__email {
      input {
        height: 46px;
        font-size: 14px;
      }
    }
  }
}
@media (max-width: 650px) {
  .digital {
    &__wrapper {
      gap: 50px;
    }
    &__email {
      input {
        height: 46px;
        font-size: 14px;
      }
    }
    &__grafic {
      width: 300px;
      height: 247px;
    }
    &__growth {
      width: 130px;
      height: 133px;
      top: -20px;
      right: -60px;
    }
    &__statistic {
      width: 300px;
      height: 86px;
    }
  }
}
</style>
