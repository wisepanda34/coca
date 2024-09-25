<!-- Article.vue -->
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { articles } from '~/constants'
</script>

<template>
  <section class="article">
    <div class="container">
      <div class="article__wrapper">
        <h3 class="title-h3">Articles</h3>
        <div class="article__motto motto">
          Complex tech decoded by engineers, business trends analyzed by
          experts.
        </div>
        <div class="article__swiper">
          <swiper
            :modules="[Navigation, Autoplay]"
            navigation
            :slides-per-view="1.2"
            :space-between="24"
            :loop="true"
            :speed="1200"
            :breakpoints="{
              991: {
                spaceBetween: 32,
                slidesPerView: 3
              },
              640: {
                spaceBetween: 24,
                slidesPerView: 2
              }
            }"
          >
            <swiper-slide
              v-for="(item, index) in articles"
              :key="index"
              class="slide"
            >
              <div class="slide__image">
                <NuxtImg :src="item.image" alt="img" />
                <h4 class="slide__title">{{ item.title }}</h4>
                <p class="motto">{{ item.descr }}</p>
                <UIButton
                  text="Read more"
                  :is-white="false"
                  class="button-read"
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.article {
  &__wrapper {
    padding: 10px 0;

    .title-h3 {
      transform: translateY(130px);
    }
  }
  &__motto {
    max-width: 435px;
    transform: translateY(130px);
  }
  &__swiper {
    padding-bottom: 100px;
    .swiper ::v-deep(.swiper-button-prev)::after,
    ::v-deep(.swiper-button-next)::after {
      content: none;
      font-family: inherit;
    }
    .swiper ::v-deep(.swiper-button-prev) {
      top: 50px;
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
      @media (max-width: 640px) {
        width: 28px;
        height: 28px;
        right: auto;
        top: 40px;
        left: 10px;
        box-shadow: $shadow-2;
      }
    }
    .swiper ::v-deep(.swiper-button-next) {
      top: 50px;
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
      @media (max-width: 640px) {
        width: 28px;
        height: 28px;
        top: 40px;
        left: 50px;
      }
    }

    .slide {
      padding-top: 200px;
      &__title {
        font-size: 32px;
        font-weight: 700;
        line-height: 1.31;
        margin: 24px 0 16px;
      }
      .button-read {
        box-shadow: $shadow-2;
        margin: 16px 0 20px 8px;
      }
    }
  }
}
@media (max-width: 991px) {
  .article {
    &__swiper {
      padding-bottom: 5vw;
      .slide {
        padding-top: 200px;
      }
    }
  }
}
@media (max-width: 640px) {
  .article {
    &__wrapper {
      padding-top: 15vw;
      .title-h3 {
        transform: translateY(0);
      }
    }
    &__motto {
      max-width: 435px;
      transform: translateY(0);
    }
    &__swiper {
      .slide {
        padding-top: 80px;
        &__title {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
