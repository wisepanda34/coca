<!-- Customer.vue -->
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, EffectFlip, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-flip'
import { customerSlides } from '~/constants'

const modules = [Navigation, EffectFlip, Autoplay]
</script>

<template>
  <section class="customer">
    <div class="container">
      <div class="customer__wrapper">
        <div class="customer__content">
          <h3 class="title-h3">
            What our customer <br />
            are saying
          </h3>
          <p class="motto">
            We are trusted numerous companies from different business to meet
            their needs
          </p>
        </div>
        <div class="customer__decor" />

        <div class="customer__swiper">
          <swiper
            :modules="modules"
            navigation
            :slides-per-view="1"
            :space-between="32"
            :loop="true"
            :autoplay="{
              delay: 3000
            }"
            effect="flip"
            :speed="1000"
          >
            <swiper-slide
              v-for="(item, index) in customerSlides"
              :key="index"
              class="customer__slide slide"
            >
              <div class="slide__rating">
                <NuxtImg
                  v-for="n in item.rating"
                  :key="n"
                  src="/svg/star.svg"
                />
                {{ item.rating }}
              </div>
              <div class="slide__review">
                {{ item.text }}
              </div>
              <div class="slide__author">
                <div class="slide__avatar">
                  <NuxtImg :src="item.avatar" />
                </div>
                <p class="slide__name">{{ item.name }}</p>
                <p class="slide__position">{{ item.position }}</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.customer {
  &__wrapper {
    padding: 5vw 0 10vw;
  }
  &__content {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      justify-content: space-between;
      flex-direction: row;
    }
  }
  &__content .title-h3 {
    max-width: 576px;
  }
  &__content .motto {
    max-width: 376px;
  }
  &__decor {
    width: 115px;
    height: 77px;
    background-image: url(/svg/decor-grey.svg);
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 24px;
    @media (min-width: 991px) {
      margin-bottom: -20px;
    }
  }
  &__swiper {
    position: relative;
    margin-left: 160px;

    .swiper ::v-deep(.swiper-button-prev)::after,
    ::v-deep(.swiper-button-next)::after {
      content: none;
      font-family: inherit;
    }
    .swiper ::v-deep(.swiper-button-prev) {
      top: auto;
      bottom: 0;
      left: auto;
      right: 70px;
      width: 50px;
      height: 50px;
      border: 1px solid transparent;
      border-radius: 50%;

      background-image: url(/svg/arrow-prev.svg);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transition: border 0.3s ease;
      &:hover {
        border: 0.1px solid $grey-text;
      }
      @media (max-width: 600px) {
        width: 28px;
        height: 28px;
        right: 42px;
      }
    }
    .swiper ::v-deep(.swiper-button-next) {
      top: auto;
      bottom: 0;
      width: 50px;
      height: 50px;
      border-radius: 50%;

      background-image: url(/svg/arrow-next.svg);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transition: opacity 0.3s ease;
      &:hover {
        opacity: 0.85;
      }
      @media (max-width: 600px) {
        width: 28px;
        height: 28px;
      }
    }
  }
  &__slide .slide {
    max-width: 900px;
    margin: 0 auto;

    &__rating {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 20px;
        @media (max-width: 600px) {
          width: 16px;
        }
      }
    }
    &__review {
      font-size: 40px;
      font-weight: 700;
      line-height: 130%;
      margin-bottom: 40px;
    }
    &__bottom {
      position: relative;
      display: flex;
      justify-content: space-between;
    }
    &__author {
      display: grid;
      grid-template-columns: 56px auto;
      column-gap: 24px;
    }
    &__avatar {
      grid-area: span 2;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      overflow: hidden;
    }
    &__name {
      font-size: 18px;
      font-weight: 700;
      color: $black;
    }
    &__position {
      font-size: 16px;
      color: $grey-text-2;
    }
    &__buttons {
      display: flex;
      gap: 15px;
    }
  }
}

@media (max-width: 991px) {
  .customer {
    &__swiper {
      margin-left: 6vw;
    }
    &__decor {
      width: 32px;
      height: 21px;
    }
  }
}
@media (max-width: 600px) {
  .customer {
    &__slide .slide {
      &__review {
        font-size: 18px;
      }
      &__author {
        grid-template-columns: 40px auto;
        column-gap: 10px;
        line-height: 20px;
      }
      &__avatar {
        width: 40px;
        height: 40px;
      }
      &__name {
        font-size: 14px;
      }
      &__position {
        font-size: 12px;
      }
    }
  }
}
@media (max-width: 425px) {
  .customer {
    &__slide {
      padding-bottom: 30px;
    }
  }
}
</style>
