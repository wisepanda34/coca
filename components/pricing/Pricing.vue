<!-- Pricing.vue -->
<script setup>
import Orange from '~/components/global/Orange.vue'
import Green from '~/components/global/Green.vue'
import { priceCards, includesToPackage } from '~/constants'
import ThePricingCard from '~/components/The/PricingCard.vue'

const handleChoosePlan = (card) => {
  console.log('Выбранный план: ', card)
}
</script>

<template>
  <section class="pricing">
    <div class="container">
      <div class="pricing__wrapper">
        <Orange class="pricing__wrapper_orange" />
        <Green class="pricing__wrapper_green" />
        <div class="pricing__up">
          <div class="pricing__plans">
            Pricing plans
            <NuxtImg src="/images/smilik.png" alt="smile" />
          </div>
          <h1 class="pricing__title title-h1">
            Choose a plan for a more advanced business
          </h1>
          <UIToggleSwitch
            class="pricing__plans-switch"
            label="Annual pricing (save 20%)"
          />
        </div>
        <div class="pricing__cards">
          <ThePricingCard
            v-for="(card, index) in priceCards"
            :key="index"
            :card="card"
            :includes="includesToPackage"
            :class="{ upper: index === 1 }"
            @choose-plan="handleChoosePlan"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.pricing {
  &__wrapper {
    position: relative;

    &_orange {
      top: -200px;
      left: -100px;
    }
    &_green {
      top: 0;
      right: -150px;
    }
  }
  &__up {
    max-width: 903px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    margin: 100px auto;
  }
  &__plans {
    width: 154px;
    height: 32px;
    margin: 0 auto;
    border-radius: 16px;
    background: $blue-light;
    color: $blue-primary;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    img {
      width: 18px;
      height: 18px;
      object-fit: fill;
    }
    &-switch {
      margin: 0 auto;
    }
  }
  &__title {
    margin: 0 auto;
    text-align: center;
  }
  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    padding: 80px 0 40px;
  }
  &__cards .upper {
    transform: translateY(-60px);
  }
}

@media (max-width: 1439px) {
  .pricing {
    &__up {
      margin: 6vw auto;
    }
  }
}
@media (max-width: 991px) {
  .pricing {
    &__wrapper {
      &_orange {
        top: -190px;
        left: -120px;
        width: 400px;
        height: 400px;
      }
      &_green {
        top: 0;
        right: -150px;
        width: 400px;
        height: 400px;
      }
    }
    &__cards {
      grid-template-columns: 1fr;
      gap: 32px;
      justify-items: center;
      padding: 7vw 0;
    }
    &__cards .upper {
      transform: translateY(0);
    }
  }
}
</style>
