<!-- components/The/Header.vue -->
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false)
const isContactRoute = computed(() => route.path === '/contact');

const toggleMenu = () => {
  if (window.innerWidth <= 900) {
    isMenuOpen.value = !isMenuOpen.value
    if (isMenuOpen.value) {
        document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }
}
const closeMenu = () => {
  if(window.innerWidth <= 900){
    toggleMenu()
  }
}

import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false)
const isContactRoute = computed(() => route.path === '/contact');

const toggleMenu = () => {
  if (window.innerWidth <= 900) {
    isMenuOpen.value = !isMenuOpen.value
    if (isMenuOpen.value) {
        document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }
}
const closeMenu = () => {
  if(window.innerWidth <= 900){
    toggleMenu()
  }
}

</script>
 
<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <TheLogo/>
        <div class="header__menu" :class="{open: isMenuOpen}">
          <nav class="header__nav">
            <NuxtLink class="header__nav-item" to="/" exact-active-class="active" @click="closeMenu">Home</NuxtLink>
            <NuxtLink class="header__nav-item" to="/about" exact-active-class="active" @click="closeMenu">About</NuxtLink>
            <NuxtLink class="header__nav-item" to="/blog" exact-active-class="active" @click="closeMenu">Blog</NuxtLink>
            <NuxtLink class="header__nav-item" to="/pricing" exact-active-class="active" @click="closeMenu">Pricing</NuxtLink>
            <NuxtLink class="header__nav-item contact " to="/contact" exact-active-class="active" @click="closeMenu">
              <div class="flex-center gap-5">
                <div>Contact Us </div>
                <IconArrowBlack :is-blue="isContactRoute"/>
              </div>
              <div class="contact__line-black" v-if="!isContactRoute"></div>
              <div class="contact__line-blue" v-else></div>
            </NuxtLink>
          </nav>
          <div class="header__menu-close" @click="toggleMenu">
            <IconClose/>
          </div>
        </div>
        <div class="header__burger" @click="toggleMenu">
          <IconBurger/>
        </div>
      </div>
    </div>
  </header>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <TheLogo/>
        <div class="header__menu" :class="{open: isMenuOpen}">
          <nav class="header__nav">
            <NuxtLink class="header__nav-item" to="/" exact-active-class="active" @click="closeMenu">Home</NuxtLink>
            <NuxtLink class="header__nav-item" to="/about" exact-active-class="active" @click="closeMenu">About</NuxtLink>
            <NuxtLink class="header__nav-item" to="/blog" exact-active-class="active" @click="closeMenu">Blog</NuxtLink>
            <NuxtLink class="header__nav-item" to="/pricing" exact-active-class="active" @click="closeMenu">Pricing</NuxtLink>
            <NuxtLink class="header__nav-item contact " to="/contact" exact-active-class="active" @click="closeMenu">
              <div class="flex-center gap-5">
                <div>Contact Us </div>
                <IconArrowBlack :is-blue="isContactRoute"/>
              </div>
              <div class="contact__line-black" v-if="!isContactRoute"></div>
              <div class="contact__line-blue" v-else></div>
            </NuxtLink>
          </nav>
          <div class="header__menu-close" @click="toggleMenu">
            <IconClose/>
          </div>
        </div>
        <div class="header__burger" @click="toggleMenu">
          <IconBurger/>
        </div>
      </div>
    </div>
  </header>
</template>
 
<style scoped lang='scss'>
 .header {
  &__wrapper {
    height: 114px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__menu-close { 
    display: none;
  }
  &__nav {
    display: flex;
    gap: 32px;

    font-size: 16px;
    line-height: 160%;

    .contact {
      font-weight: 600;
      margin-left: 36px;
      gap: 5px;
      
      &__line-black {
        width: 100%;
        height: 1.6px;
        background: $black;
      }
      &__line-blue{
        width: 100%;
        height: 1.6px;
        background: $blue-primary;
      }
    }

    &-item.active {
      color: $blue-primary;
    }
  }
  &__burger {
  display: none;
 }
 }

 @media (max-width: 900px) {
  .header {
    &__wrapper {
      height: 100px;
    }
    &__menu {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      background: $blue-dark;
      padding-top: 20vh;

      transform: translateX(-120%);
      transition: transform .5s ease-out;

      &-close {
        display: block;
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }
    &__menu.open {
        transform: translateX(0);
    }
    &__nav {
      margin: 0 auto;
      flex-direction: column;
      align-items: center;
      gap: 5vh;
      font-size: 24px;
      letter-spacing: 2px;

      color: $white;
    }
    &__burger {
      display: block;
    }
  }
 }
</style>