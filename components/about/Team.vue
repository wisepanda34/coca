<!-- Team.vue -->
<script setup>
import Green from '~/components/global/Green.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { teamSlides } from '~/constants'
</script>

<template>
  <section class="team">
    <div class="container">
      <div class="team__wrapper">
        <Green class="team__wrapper_green" />
        <h3 class="title-h3">
          Meet our team of creators, designers, and world-class problem solvers
        </h3>
        <p class="motto">
          To become the company that customers want, it takes a group of
          passionate people. Get to know the people who lead
        </p>

        <div class="team__swiper">
          <swiper
            :modules="[Autoplay]"
            :slides-per-view="1.4"
            :space-between="24"
            :centered-slides="false"
            :loop="true"
            :autoplay="{
              delay: 3000
            }"
            :speed="800"
            :breakpoints="{
              991: {
                spaceBetween: 32,
                slidesPerView: 3
              },
              768: {
                spaceBetween: 24,
                slidesPerView: 2.2
              }
            }"
          >
            <swiper-slide
              v-for="(item, index) in teamSlides"
              :key="index"
              class="team__slide slide"
            >
              <div class="slide__item">
                <div class="slide__image">
                  <img :src="item.photo" alt="img" />
                </div>
                <div class="slide__info">
                  <p class="descr">{{ item.name }}</p>
                  <div class="slide__social">
                    <NuxtLink class="slide__icon" :to="item.twitter">
                      <img src="/svg/icon-twitter.svg" alt="ic" />
                    </NuxtLink>
                    <NuxtLink class="slide__icon" :to="item.linkedIn">
                      <img src="/svg/icon-linkedin.svg" alt="ic" />
                    </NuxtLink>
                    <NuxtLink class="slide__icon" :to="item.instagram">
                      <img src="/svg/icon-instagram.svg" alt="ic" />
                    </NuxtLink>
                  </div>
                  <p class="motto">{{ item.position }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="team__bottom">
          <h3 class="title-h3">Join our team, The one with the master touch</h3>
          <p class="motto">
            We believe it takes great people to make a great product. That’s why
            we hire not only the perfect professional fits, but people who
            embody our company values.
          </p>
          <NuxtLink class="link" to="/#">See open positions &#8594;</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.team {
  &__wrapper {
    position: relative;
    padding: 90px 0;

    &_green {
      top: -10vw;
      right: -15vw;
    }

    .title-h3,
    .motto {
      max-width: 900px;
    }
  }
  &__swiper {
    padding: 80px 0;
  }
  .slide {
    &__item {
      max-width: 380px;
    }
    &__image {
      background: $grey-light;
      min-height: 200px;
    }
    &__info {
      display: grid;
      grid-template-columns: 2fr 1fr;
      margin-top: 12px;
    }
    &__social {
      display: flex;
      gap: 10px;
    }
    &__icon {
      width: 32px;
    }
  }
  &__bottom {
    display: grid;
    grid-template-columns: 1fr 0.8fr;
    column-gap: 7vw;

    .title-h3 {
      column-span: 2;
    }
    .link {
      grid-column: 2;
      grid-row: 2;
      transition: color 0.2s ease;
      &:hover {
        color: $blue-primary;
      }
    }
  }
}

@media (max-width: 991px) {
  .team {
    &__wrapper {
      padding: 10vw 0;
    }
    &__bottom {
      grid-template-columns: 1fr;
      .title-h3 {
        column-span: auto;
      }
      .link {
        grid-column: auto;
        grid-row: auto;
      }
    }
  }
}
@media (max-width: 600px) {
  .team__wrapper_green {
    top: -10vw;
    left: 0;
    right: auto;
  }
}
</style>
