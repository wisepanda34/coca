<!-- Trending.vue -->
<script setup>
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { trendigSlides } from '~/constants';
const modules = [Navigation]
</script>
 
<template>
  <section class="trending">
    <div class="container">
      <div class="trending__wrapper">
        <h3 class="title-h3 text-center">Trending news from Coca</h3>
        <p class="motto text-center" >we have some new Service to pamper you</p>
          
        <div class="trending__swiper">
          <swiper
            :modules="modules"
            navigation
            :slides-per-view="1"
            :space-between="32"
            :loop="true"
            autoplay
            :breakpoints="{
              991: {
                slidesPerView: 2,
              },
            }"
          >
            <swiper-slide class="trending__slide" v-for="(item, index) in trendigSlides" :key="index">
              <div class="trending__image">
                <NuxtImg :src="item.imageLink"/>
                <!-- <div class="trending__round">
                  <NuxtImg src="/svg/round.svg" alt="Slide icon"/>
                </div> -->
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
 
<style lang='scss'>
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
      color: #2ccb04!important; 
      background: $white;
    }
    .swiper-button-next {
      display: none;
      color: red; 
      background: black;
    }
  }
  &__slide{

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
    box-shadow: $shadow-2;
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
    right: -16px; 
    width: 80px; 
    height: 80px; 
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: translate(50%, -50%);
    z-index: 1000;

    img {
        width: 100%; 
      }
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
      display: none;
    }
  }
}

</style>