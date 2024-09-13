<!-- Faq.vue -->
<script setup>
import { faqArray } from '~/constants'

const isOpenFaq = ref(Array(faqArray.length).fill(false))
const toggleFaq = (index) => {
  isOpenFaq.value[index] = !isOpenFaq.value[index]
}
</script>

<template>
  <div class="faq">
    <div class="container">
      <div class="faq__wrapper">
        <h3 class="faq__title title-h3">Frequently asked questions</h3>
        <p class="faq__descr">
          Everything you need to know about the product and billing.
        </p>
        <ul class="faq__menu">
          <li
            v-for="(item, index) in faqArray"
            :key="index"
            class="faq__item"
            @click="toggleFaq(index)"
          >
            <div class="faq__item_question">
              {{ item.question }}
            </div>
            <div class="faq__item_switch">
              <!-- <span v-if="!isOpenFaq[index]">+</span><span v-else>-</span> -->
              <span :class="{ rotate: isOpenFaq[index] }"></span>
              <span :class="{ rotate: isOpenFaq[index] }"></span>
            </div>
            <div class="faq__item_answer" :class="{ open: isOpenFaq[index] }">
              {{ item.answer }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.faq {
  &__wrapper {
    padding: 30px 0;
  }
  &__title,
  &__descr {
    text-align: center;
  }
  &__menu {
    padding: 30px 0;
    font-size: 16px;
    font-weight: 700;
  }
  &__item {
    position: relative;
    display: grid;
    grid-template-columns: auto 20px;
    grid-column-gap: 20px;
    grid-template-rows: auto;
    margin-bottom: 20px;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      bottom: -10px;
      left: 0;
      background: $grey-light;
    }

    &_answer {
      max-height: 0;
      overflow: hidden;
      font-weight: 500;
      transition: all 0.5s ease;
    }
    &_answer.open {
      max-height: 400px;
      overflow: visible;
    }
    &_switch {
      position: relative;
      top: 15px;
      left: 3px;

      span {
        position: absolute;
        width: 15px;
        height: 2px;

        background: $black;
        transition: transform 0.3s ease;

        &:first-child {
          transform: rotate(0deg);
          &.rotate {
            transform: rotate(180deg);
          }
        }

        &:nth-child(2) {
          transform: rotate(90deg);
          &.rotate {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
}
</style>
