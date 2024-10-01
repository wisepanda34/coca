<!-- The/PricingCard.vue -->
<script setup>
import { useSwitchStore } from '~/stores/switch.store'
const useSwitch = useSwitchStore()

const props = defineProps({
  card: {
    type: Object,
    required: true
  },
  includes: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['choosePlan'])

const handleChoosePlan = () => {
  emit('choosePlan', props.card)
  console.log('handleChoosePlan')
}
</script>

<template>
  <div class="card" :class="{ 'bg-blue': card.bgBlue }">
    <div class="card__wrapper">
      <div class="card__icons">
        <img :src="card.icon" alt="icon" class="card__icon" />
        <img
          v-if="card.iconBest"
          :src="card.iconBest"
          alt="icon"
          class="card__iconBest"
        />
      </div>
      <h3 class="card__package">{{ card.package }}</h3>
      <p class="card__descr">{{ card.descr }}</p>

      <div class="card__price">
        $
        <span v-if="useSwitch.isSave">{{ card.priceAnnual }}</span>
        <span v-else>{{ card.price }}</span>
        <span class="card__price_month"> /mo</span>
      </div>
      <div class="card__subtitle">What’s included:</div>
      <ul class="card__list">
        <li v-for="(item, i) in includes" :key="i" class="card__item">
          <span :class="{ inaccessible: !card.include.includes(i) }">
            {{ item }}
          </span>
        </li>
      </ul>
      <UIButton
        class="card__button"
        text="Choose Plan"
        :is-white="false"
        border-color="#7e8492"
        @click="handleChoosePlan"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  max-width: 380px;
  border: 1px solid $grey-light;
  border-radius: $radius-8;
  background: $white;
  color: $black;
  font-size: 16px;
  padding: 40px 24px;
  box-shadow: $shadow-2;

  &.bg-blue {
    border: none;
    background: $blue-dark;
    color: $white;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }
  &__icons {
    height: 40px;
    display: flex;
    justify-content: space-between;
  }
  &__icon {
    width: 40px;
    height: 40px;
  }
  &__iconBest {
    width: 118px;
    height: 32px;
  }
  &__package {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4;
    margin-top: 16px;
  }
  &__descr {
    font-weight: 500;
    line-height: 1.4;
    color: $grey-text-2;
    margin-top: 8px;
  }
  &__price {
    font-size: 56px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -2px;
    margin-top: 24px;

    &_month {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.625;
      letter-spacing: 1px;
    }
  }
  &__subtitle {
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
    margin-top: 24px;
  }
  &__list {
    font-weight: 500;
    line-height: 1.625;
    padding-top: 20px;
    padding-left: 40px;
  }
  &__item {
    position: relative;
    padding: 8px 0;
    &::before {
      content: '';
      position: absolute;
      top: 9px;
      left: -40px;
      width: 20px;
      height: 20px;
      background-image: url(/images/green-bird.png);
      background-size: contain;
      background-repeat: no-repeat;

      @media (max-width: 991px) {
        top: 11px;
        width: 16px;
        height: 16px;
      }
    }
  }
  &__item .inaccessible {
    color: $grey-text-2;
    text-decoration: line-through;
    &::before {
      content: '';
      position: absolute;
      top: 9px;
      left: -40px;
      width: 20px;
      height: 20px;
      background-image: url(/images/grey-bird.png);
      background-size: contain;
      background-repeat: no-repeat;

      @media (max-width: 991px) {
        top: 11px;
        width: 16px;
        height: 16px;
      }
    }
  }
  &__button {
    margin: 40px auto 20px;
  }
}
@media (max-width: 991px) {
  .card {
    padding: 24px 20px;
    font-size: 14px;

    &__price {
      font-size: 32px;
    }
    &__icons {
      height: 32px;
    }
    &__icon {
      width: 32px;
      height: 32px;
    }
    &__iconBest {
      width: 106px;
      height: 28px;
    }
  }
}
</style>
