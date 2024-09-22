<!-- pages/blog/[id].vue -->
<script setup>
import { blogs, activitySlides } from '~/constants'

const route = useRoute()
const blogId = route.params.id

const blog = blogs.find((item) => item.id === blogId)
const activities = activitySlides.find((item) => item.id === blogId)
</script>

<template>
  <section class="blog">
    <div class="container">
      <div class="blog__wrapper">
        <div v-if="blog">
          <h1 class="title-h1">{{ blog.title }}</h1>
          <NuxtImg :src="blog.image" class="blog__image" />
          <div class="blog__text">{{ blog.text }}</div>
        </div>
        <div v-if="activities">
          <h1 class="title-h1">{{ activities.title }}</h1>
          <NuxtImg :src="activities.image" class="blog__image" />
          <div class="blog__text">{{ activities.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.blog {
  &__wrapper {
    max-width: 940px;
    margin: 0 auto;
    padding: 30px 0 100px;
  }
  &__image {
    height: auto;
    min-height: 150px;
    max-height: 830px;
    margin-bottom: 50px;
    box-shadow: $shadow-2;
  }
}
</style>
