<!-- Activity.vue -->
<script setup>
import ListSelect from '../UI/ListSelect.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { activitySlides } from '~/constants'
import { useListselectStore } from '~/stores/listselect.store.js'

const listSelectStore = useListselectStore()
const modules = [Navigation, Autoplay]

const filteredSlides = computed(() => {
  if (listSelectStore.optionSelected === 'View all') {
    return activitySlides
  }
  return activitySlides.filter(
    (slide) => slide.category === listSelectStore.optionSelected
  )
})
</script>

<template>
  <section class="activity">
    <div class="container">
      <div class="activity__wrapper">
        <h1 class="title-h1">Activity & Updates</h1>
        <p class="activity__slogan slogan">
          Our biggest challenge is making sure we're always designing and
          building products that will help you run your business better.
        </p>
        <ListSelect class="activity__select" />
        <transition name="swiper-fade" mode="out-in">
          <div
            v-if="filteredSlides.length"
            :key="listSelectStore.optionSelected"
            class="activity__swiper"
          >
            <swiper
              :modules="modules"
              :slides-per-view="1.2"
              :space-between="24"
              :loop="true"
              :speed="1800"
              :breakpoints="{
                991: {
                  spaceBetween: 32,
                  slidesPerView: 2.5
                },
                640: {
                  spaceBetween: 24,
                  slidesPerView: 2
                }
              }"
            >
              <swiper-slide
                v-for="(item, index) in filteredSlides"
                :key="index"
                class="slide"
              >
                <div class="slide__image">
                  <NuxtImg :src="item.image" alt="img" />
                </div>
                <div class="slide__info">
                  <p>{{ item.published }}</p>
                  <p>by: {{ item.author }}</p>
                </div>
                <NuxtLink :to="`/blog/${item.id}`" class="slide__title">
                  {{ item.title }}
                </NuxtLink>
                <p class="slide__descr">{{ item.descr }}</p>
              </swiper-slide>
            </swiper>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.activity {
  &__wrapper {
    position: relative;
    padding: 100px 0 50px;

    &::before {
      content: '';
      position: absolute;
      top: -100px;
      left: -100px;
      width: 550px;
      height: 550px;
      background-image: url('/images/bg-orange.png');
      background-size: cover;
      background-repeat: no-repeat;
      z-index: -1;
    }
    &::after {
      content: '';
      position: absolute;
      top: 100px;
      right: -150px;
      width: 550px;
      height: 550px;
      background-image: url('/images/bg-green.png');
      background-size: cover;
      background-repeat: no-repeat;
      z-index: -1;
    }
  }
  &__slogan {
    max-width: 750px;
  }
  &__select {
    z-index: 2;
  }
  &__swiper {
    padding-bottom: 100px;
    .slide {
      display: flex;
      flex-direction: column;

      &__image {
        width: 100%;
        height: 0;
        padding-top: 83%;
        background: grey;
        position: relative;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &__info {
        width: 100%;
        display: flex;
        justify-content: space-between;
        column-gap: 40px;
        flex-wrap: wrap;
        font-size: 14px;
        margin-top: 16px;
      }
      &__title {
        max-width: 90%;
        font-size: 32px;
        font-weight: 700;
        line-height: 1.25;
        margin-top: 24px;
        margin-bottom: 16px;
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
          color: $grey-text-2;
        }
      }
      &__descr {
        max-width: 90%;
        font-size: 20px;
        line-height: 1.5;
      }
    }
  }
}
@media (max-width: 1439px) {
  .activity {
    &__wrapper {
      padding: 8vw 0 2vw;
    }
  }
}
@media (max-width: 991px) {
  .activity__swiper {
    padding-bottom: calc(10vw + 20px);
  }
}
@media (max-width: 767px) {
  .activity {
    &__wrapper::before {
      top: calc(5vw - 250px);
      left: calc(5vw - 200px);
    }
    &__wrapper::after {
      top: 0;
      right: calc(5vw - 300px);
    }
    &__swiper {
      .slide {
        &__info {
          display: none;
        }
        &__title {
          font-size: 24px;
          margin-top: 5vw;
        }
        &__descr {
          font-size: 14px;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .activity__swiper .slide {
  }
}
@media (max-width: 375px) {
  .activity__swiper .slide {
  }
}
</style>
