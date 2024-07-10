<!-- components/Footer.vue -->
<script setup>
import {footerLinks, sociaties, info} from '~/constants/index.js'
  
 
</script>
 
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">

        <div class="footer__top">
          <div>
            <h2 class="footer__top-title">Think beyond the wave</h2>
            <p class="footer__top-descr">Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help</p>
          </div>
          <div class="footer__top-btn">
            <UIButton text="Try for free"/>
          </div>
        </div>

        <div class="footer__middle">
          <div class="footer__middle-content">
            <TheLogo :isWhite="true"/>
            <p>We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs</p>
          </div>
          <div class="links">
            <div class="links__category" v-for="(category, index) in footerLinks" :key="index" >
              <h3 class="links__title">{{ category.subtitle }}</h3>
              <div class="links__item" v-for="(path, name) in category.point" :key="name">
                <NuxtLink :to="path">{{ name }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="footer__line"></div>

        <div class="footer__bottom">
          <div class="sociaty">
            <div class="sociaty__item" v-for="(item, index) in sociaties" :key="index">
              <NuxtLink :to="item.link">
                <NuxtImg class="sociaty__img" :src="item.src"></NuxtImg>
              </NuxtLink>
            </div>
          </div>
          <div class="info">
            <div class="info__item" v-for="(item, index) in info" :key="index">
              <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
            </div>
          </div>
          <div class="copyright">
            <IconCopyright/> 
            <div>Copyright 2023, All Rights Reserved</div>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>
 
<style scoped lang='scss'>
 .footer {
  min-height: 700px;
  background: $black;
  color: $white;

  &__wrapper {
    padding: 70px 0 20px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 45px 0;

    &-title {
      font-size: 64px;
      line-height: 120%;
    }

    &-descr {
      max-width: 537px;
      margin: 24px 0;
      line-height: 32px;
      font-weight: 500;
      color: $grey-text;
    }
  }

  &__middle {
    padding: 90px 0 56px;

    display: flex;
    justify-content: space-between;
    gap: 80px;

    font-size: 16px;
    line-height: 26px;
    color: $grey-text-2;
    
    &-content {
      width: 292px;
      padding-top: 10px;      
    }
    .links {
      width: 100%;
      max-width: 764px;
      display: flex;
      justify-content: space-between;

      &__title {
        font-weight: 700;
        color: $white;
        margin-bottom: 24px;
      }
      &__item {
        margin-top: 14px;
        transition: all 0.2s ease;

        &:hover {
         color: $white; 
        }
      }
    }
  }

  &__line {
    width: 100%;
    height: 1px;
    background: #606060;
  }

  &__bottom {
    padding: 38px 0;

    display: flex;
    justify-content: space-between;

    font-size: 14px;
    font-weight: 500;
    color: $white;
    letter-spacing: 1px;
    .sociaty {

      display: flex;
      align-items: center;
      gap: 24px;

      &__img {
        width: 20px;
        height: 20px;
      }
    }
    .info {
      display: flex;
      gap: 40px;
      flex-wrap: wrap;
      
      &__item {
        text-wrap: nowrap;
        transition: all 0.2s ease;

        &:hover {
          color: $grey-text;
        }
      }
    }
    .copyright {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

 }
 @media (max-width: 991px) {
  .footer {
    &__wrapper {
      padding: 20px 17px;
    }
    
    &__top {
      flex-direction: column;
      padding: 20px 0;
      &-title {
        font-size: 8.5vw;
        text-align: center;
      }
      &-descr {
        position: relative;
        padding-left: 50px;
        font-size: 16px;

        &::before {
          content: '';
          position: absolute;
          top: 16px;
          left: 0;
          width: 35px;
          height: 1px;
          background: $white;
        }
      }
    }
    &__middle {
      padding: 50px 0;
      &-content {
        width: 90%;
        padding-top: 0;
      }
      .links {
        display: none;
      }
    }
    &__bottom {
      flex-direction: column;
      align-items: center;
      gap: 24px;
      padding: 50px 0 20px;
      color: $grey-text-2;
      .sociaty {
        &__img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
 }

 @media (max-width: 600px) {
  .footer {
    &__top {
      &-btn {
        align-self: start;
        padding-left: 50px;
      }
    }
    &__bottom {
      .info {
        gap: 30px;
      }
    }
  }
 }
 @media (max-width: 450px) {
  .footer {
    &__bottom {
      .info {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding-top: 20px;
      }
    }
  }
 }
</style>