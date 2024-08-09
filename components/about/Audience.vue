<!-- Audience.vue -->
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { audienceSlides } from '~/constants'
</script>

<template>
  <section class="audience">
    <div class="container">
      <div class="audience__wrapper">
        <div class="audience__bg" />
        <h1 class="audience__title title-h1">
          Everything you need to get the attention of your audience
        </h1>
        <div class="audience__content">
          <p class="audience__slogan slogan">
            Our digital agency helps clients develop, implement and maintain
            successful digital marketing strategies across all channels. Also
            work with you to build your website and create online businesses
            that grow.
          </p>
          <div class="audience__stamp" />
        </div>
        <div class="audience__swiper">
          <swiper
            :modules="[Autoplay]"
            :slides-per-view="1"
            :space-between="16"
            :centered-slides="false"
            :loop="true"
            :autoplay="{
              delay: 5000
            }"
            :speed="1800"
            :breakpoints="{
              991: {
                spaceBetween: 32,
                slidesPerView: 1.2
              }
            }"
          >
            <swiper-slide
              v-for="(item, index) in audienceSlides"
              :key="index"
              class="audience__slide slide"
            >
              <div class="slide__wrapper">
                <div class="slide__image-big">
                  <NuxtImg :src="item.imageBig" alt="img" />
                  <UIRound class="slide__round" />
                </div>
                <div class="slide__block">
                  <div class="slide__block-image">
                    <NuxtImg :src="item.imageMain" alt="img" />
                  </div>
                  <h4 class="title-h4">{{ item.title }}</h4>
                  <p class="motto">{{ item.descr }}</p>
                  <UIButton text="See Details &#8594;" is-white="false" />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="audience__bottom">
          <h3 class="title-h3">Powerful ideas & sales acceleration</h3>
          <p class="descr">
            We are a software development firm specializing in digital products.
            We build beautiful, functional and cross-platform solutions that are
            accessible to all.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.audience {
  &__wrapper {
    position: relative;
    padding: 70px 0;
  }
  &__title {
    max-width: 950px;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    gap: 10vw;
  }
  &__slogan {
    max-width: 800px;
  }
  &__stamp {
    min-width: 127px;
    width: 127px;
    height: 127px;
    align-self: center;
    background-image: url('/svg/stamp.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }
  &__swiper {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: -25vw;
      left: -5vw;
      width: 40vw;
      height: 40vw;
      background-image: url('/images/bg-orange.png');
      background-size: contain;
      background-repeat: no-repeat;
      z-index: 1;
    }
  }
  .slide {
    &__wrapper {
      height: 630px;
      display: flex;
      gap: 32px;
    }
    &__image-big {
      position: relative;
      width: 50%;
    }
    &__round {
      position: absolute;
      top: 20%;
      right: -56px;
    }
    &__block {
      width: 50%;
      display: flex;
      flex-direction: column;

      &-image {
        height: 55%;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .title-h4 {
        margin-top: 24px;
      }
      .motto {
        margin-bottom: 17px;
      }
    }
  }
  &__bottom {
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
    gap: 30px;

    .title-h3 {
      max-width: 490px;
    }
    .descr {
      max-width: 520px;
    }
  }
}

@media (max-width: 991px) {
  .audience {
    &__wrapper {
      padding: 2vw 0;
    }
    &__content {
      flex-direction: column;
      gap: 0;
    }
    &__slogan {
      margin-bottom: 5px;
    }
    &__stamp {
      min-width: 54px;
      width: 54px;
      height: 75px;
      align-self: self-end;
    }
    &__swiper {
      &::before {
        bottom: -30%;
        left: -20%;
        width: 100%;
        height: 100%;
      }
    }
    .slide {
      &__wrapper {
        height: auto;
      }
      &__image-big {
        display: none;
      }
      &__block {
        width: 100%;
        &-image {
          height: 60vw;
        }
      }
    }
    &__bottom {
      flex-direction: column;
      gap: 0;
      margin-top: 12vw;
      .descr {
        max-width: 100%;
      }
    }
  }
}
</style>
