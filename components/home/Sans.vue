<!-- components/home/Sans.vue -->
<script setup>
import { useAnimationObserver } from '~/composables/useAnimate'
import { addAnimation } from '~/utils/animate.js'

const sansRef = useAnimationObserver(addAnimation, 0.5)
</script>

<template>
  <section class="sans">
    <div class="container">
      <div class="sans__wrapper">
        <h2 class="title-h2">
          Sans help our client solve complex customer problems with date that
          does more.
        </h2>
        <p class="sans__motto motto">
          Our platform offers the modern enterprise full control of how date can
          be access and used with industry leading software solutions for
          identity, activation, and date collaboration
        </p>
        <div ref="sansRef" class="sans__content animate-up">
          <div class="sans__block">
            <div class="sans__block-img">
              <img src="/svg/build.svg" />
            </div>
            <div class="sans__block-title">Build your date fundamental</div>
            <div class="sans__block-descr">
              Build access to date, develop valuable business insights and drive
              revenue while maintaining full control over access and use of date
              at all times.
            </div>
          </div>
          <div class="sans__block">
            <div class="sans__block-img">
              <img src="/svg/measure.svg" />
            </div>
            <div class="sans__block-title">Measure more effective</div>
            <div class="sans__block-descr">
              Effectively measure people-based campaigns with the freedom to
              choose from best-of breed partners to optimize and drive media
              innovation.
            </div>
          </div>
          <div class="sans__block">
            <div class="sans__block-img">
              <img src="/svg/activate.svg" />
            </div>
            <div class="sans__block-title">Activate your date</div>
            <div class="sans__block-descr">
              Accurately address your specific audiences at scale across any
              channel, platform, publisher or network and safely translate date
              between identity space to improve results.
            </div>
          </div>
          <div class="sans__block">
            <div class="sans__block-img">
              <img src="/svg/strengthen.svg" />
            </div>
            <div class="sans__block-title">Strengthen consumer privacy</div>
            <div class="sans__block-descr">
              Protect your customer date with leading privacy-preserving
              technologies and advanced techniques to minimize date movement
              while still enabling insight generation.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sans {
  background: $black;

  &__wrapper {
    padding: 120px 0;
    color: $white;
  }

  &__motto {
    width: 50%;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    row-gap: 40px;
    column-gap: 10vw;
    margin-top: 80px;
  }

  &__block {
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-img {
      width: 40px;

      img {
        width: 100%;
      }
    }
    &-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.31;
      letter-spacing: -1px;
    }
    &-descr {
      font-size: 16px;
      line-height: 1.625;
      color: $grey-text-2;
    }
  }
}

@media (max-width: 900px) {
  .sans {
    &__wrapper {
      padding: 8vw 0;
    }
    &__content {
      grid-template-columns: 1fr;
      gap: 5vw;
      margin-top: 8vw;
    }
    &__motto {
      width: 100%;
    }
    &__block {
      gap: 16px;
      margin: 0 auto;

      &-img {
        width: 24px;
      }
      &-title {
        font-size: 18px;
      }
      &-descr {
        font-size: 14px;
      }
    }
  }
}
</style>
