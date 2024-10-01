<!-- Audience.vue -->
<script setup>
import Orange from '~/components/global/Orange.vue'
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
          <div class="audience__stamp">
            <div class="float-x rotate-reverse">
              <div class="float-y">
                <NuxtImg src="/svg/stamp.svg" alt="stamp.svg" />
              </div>
            </div>
          </div>
        </div>
        <div class="audience__swiper">
          <Orange class="audience__swiper_orange" />
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
                  <UIButton text="See Details &#8594;" />
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
    width: 127px;
    height: 127px;
    align-self: center;

    img {
      width: 127px;
    }
  }
  &__swiper {
    position: relative;

    &_orange {
      top: auto;
      bottom: -25vw;
      left: -5vw;
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
      background: $grey-light;
    }
    &__round {
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
      gap: 2vw;
    }
    &__slogan {
      margin-bottom: 5px;
    }
    &__stamp {
      width: 90px;
      align-self: self-end;
      img {
        width: 90px;
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
@media (max-width: 600px) {
  .audience {
    &__stamp {
      width: 54px;
      height: 90px;
      img {
        width: 54px;
      }
    }
  }
}
</style>
