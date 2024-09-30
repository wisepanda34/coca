<!-- Trending.vue -->
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { trendigSlides } from '~/constants'
const modules = [Navigation]

const isMobile = ref(false)

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 991
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const shouldShowRound = (index) => {
  return isMobile.value || (index + 1) % 2 === 0
}
</script>

<template>
  <section class="trending">
    <div class="container">
      <div class="trending__wrapper">
        <h3 class="title-h3 text-center">Trending news from Coca</h3>
        <p class="motto text-center">we have some new Service to pamper you</p>

        <div class="trending__swiper">
          <swiper
            ref="swiperRef"
            :modules="modules"
            navigation
            :slides-per-view="1.3"
            :space-between="16"
            :loop="true"
            autoplay
            :breakpoints="{
              991: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 32
              }
            }"
          >
            <swiper-slide
              v-for="(item, index) in trendigSlides"
              :key="index"
              class="trending__slide"
            >
              <div class="trending__image">
                <NuxtImg :src="item.imageLink" />
                <UIRound
                  v-if="shouldShowRound(index)"
                  class="trending__round"
                />
              </div>
              <div class="trending__info motto-small">
                <p>Published in Insight {{ item.published }}</p>
                <p>by : {{ item.author }}</p>
              </div>
              <h4 class="title-h4">{{ item.title }}</h4>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.trending {
  &__wrapper {
    padding: 4vw 0 6vw;
  }
  &__container {
    width: 100%;
  }
  &__swiper {
    position: relative;
    margin-top: 6vw;

    .swiper-button-prev {
      display: none;
      color: #2ccb04 !important;
      background: $white;
    }
    .swiper-button-next {
      display: none;
      color: red;
      background: black;
    }
  }
  &__info {
    display: flex;
    justify-content: space-between;
  }
  &__image {
    position: relative;
    max-width: 582px;
    height: 0;
    padding-bottom: 57%;
    position: relative;
  }
  &__image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__round {
    position: absolute;
    top: 50%;
    left: -16px;
    transform: translate(-50%, -50%);
  }
}

@media (max-width: 991px) {
  .trending {
    &__image {
      max-width: 100%;
      height: 0;
      padding-bottom: 57%;
    }
    &__round {
      left: -8px;
    }
  }
}
</style>
