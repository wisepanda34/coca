<!-- Blogs.vue -->
<script setup>
import { blogs } from '~/constants'
</script>

<template>
  <section class="blogs">
    <div class="container">
      <div class="blogs__wrapper">
        <div
          v-for="(item, index) in blogs"
          :key="index"
          class="blogs__item"
          :class="{
            first: index === 0,
            second: index === 1,
            third: index === 2,
            fourth: index === 3
          }"
        >
          <NuxtLink :to="`/blog/${item.id}`" class="blogs__image">
            <NuxtImg :src="item.image" alt="img" />
          </NuxtLink>
          <NuxtLink class="blogs__title" :to="`/blog/${item.id}`">{{
            item.title
          }}</NuxtLink>
          <p class="blogs__descr">{{ item.descr }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.blogs {
  background: $black;
  padding: 120px 0;

  &__wrapper {
    color: $white;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 750px 140px 100px 140px 770px;
    column-gap: 32px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.first {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
    &.second {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
    &.third {
      grid-column: 1 / 2;
      grid-row: 5 / 6;
    }
    &.fourth {
      grid-column: 2 / 3;
      grid-row: 3 / 6;
    }
  }
  &__image {
    min-height: 200px;
    background: $grey-light;
    img {
      width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    margin: 24px 0;

    &:hover {
      text-decoration: underline;
    }
  }
  &__descr {
    font-size: 18px;
    font-weight: 500;
  }
}
@media (max-width: 1239px) {
  .blogs {
    &__wrapper {
      grid-template-rows: 60vw 15vw 4vw 15vw 64vw;
    }
    &__img img {
      min-height: auto;
    }
  }
}

@media (max-width: 991px) {
  .blogs {
    &__wrapper {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, auto);
      row-gap: 40px;
    }
    &__item {
      &.first,
      &.second,
      &.third,
      &.fourth {
        grid-column: span 1;
        grid-row: auto;
      }
    }
    &__img img {
      min-height: auto;
    }
  }
}
@media (max-width: 480px) {
  .blogs__title {
    font-size: 18px;
  }
  .blogs__descr {
    font-size: 14px;
  }
}
</style>
