<!-- components/Footer.vue -->
<script setup>
import { footerLinks, sociaties, info } from '~/constants/index.js'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isWhiteRoute = computed(() => {
  return route.path === '/' || route.path === '/blog'
})

const windowWidth = ref(null)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const isMobile = computed(() =>
  windowWidth.value !== null ? windowWidth.value < 992 : false
)
</script>

<template>
  <footer :class="['footer', { 'footer--white': isWhiteRoute }]">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__top">
          <div>
            <h2 class="footer__top-title">Think beyond the wave</h2>
            <p
              :class="[
                'footer__top-descr',
                {
                  'black before-black': isWhiteRoute,
                  grey: !isMobile && !isWhiteRoute,
                  white: isMobile && !isWhiteRoute
                }
              ]"
            >
              Ask about Sans products, pricing, implementation, or anything
              else. Our highly trained reps are standing by, ready to help
            </p>
          </div>
          <div class="footer__top-btn">
            <UIButton text="Try for free" :is-white="isWhiteRoute" />
          </div>
        </div>

        <div class="footer__middle">
          <div class="footer__middle-content">
            <TheLogo :is-white="!isWhiteRoute" />
            <p
              :class="[
                {
                  black: !isMobile && isWhiteRoute,
                  grey: !isWhiteRoute || isMobile
                }
              ]"
            >
              We built an elegant solution. Our team created a fully integrated
              sales and marketing solution for SMBs
            </p>
          </div>
          <div class="links">
            <div
              v-for="(category, index) in footerLinks"
              :key="index"
              class="links__category"
            >
              <h3 class="links__title">{{ category.subtitle }}</h3>
              <div
                v-for="(path, name) in category.point"
                :key="name"
                class="links__item"
                :class="[{ black: isWhiteRoute, grey: !isWhiteRoute }]"
              >
                <NuxtLink :to="path">{{ name }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="footer__line" />

        <div
          class="footer__bottom"
          :class="[{ center: !isMobile && isWhiteRoute }]"
        >
          <div class="sociaty" :class="[{ none: !isMobile && isWhiteRoute }]">
            <div
              v-for="(item, index) in sociaties"
              :key="index"
              class="sociaty__item"
            >
              <NuxtLink :to="item.link">
                <NuxtImg
                  v-if="!isWhiteRoute"
                  class="sociaty__img"
                  :src="item.srcWhite"
                />
                <NuxtImg v-else class="sociaty__img" :src="item.src" />
              </NuxtLink>
            </div>
          </div>
          <div class="info" :class="[{ none: !isMobile && isWhiteRoute }]">
            <div v-for="(item, index) in info" :key="index" class="info__item">
              <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
            </div>
          </div>
          <div class="copyright">
            <IconCopyright class="copyright__icon" :is-white="!isMobile" />
            <div :class="[{ grey: !isMobile && isWhiteRoute }]">
              Copyright 2023, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: $black;
  color: $white;
  &--white {
    position: relative;
    background: $white;
    color: $black;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      top: -20%;
      left: 10%;
      width: 100%;
      height: 100%;
      background-image: url('/public/images/bg-orange.png');
      background-size: contain;
      background-repeat: no-repeat;
      z-index: 1;
    }
  }

  &__wrapper {
    position: relative;
    padding: 40px 0 20px;
    z-index: 2;
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
    }
  }

  &__middle {
    padding: 90px 0 56px;

    display: flex;
    justify-content: space-between;
    gap: 80px;

    font-size: 16px;
    line-height: 26px;

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
        margin-bottom: 24px;
      }
      &__item {
        margin-top: 14px;
        transition: all 0.2s ease;

        &:hover {
          color: $grey-text-2;
        }
      }
      &__item.grey:hover {
        color: $white;
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
          color: $grey-text-2;
        }
      }
    }
    .copyright {
      display: flex;
      align-items: center;
      gap: 5px;

      &__icon {
        padding-bottom: 3px;
      }
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
        font-size: 8vw;
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
      &-descr.before-black::before {
        background: $black;
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
        gap: 24px;
      }
    }
  }
}
@media (max-width: 420px) {
  .footer {
    &__top {
      &-title {
        font-size: 24px;
      }
    }
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
