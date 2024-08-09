<!-- ListSelect.vue -->
<script setup>
import { useClickOutside } from '~/composables/useClickOutside'
const activities = [
  'View all',
  'Design',
  'Articles',
  'Product',
  'Software Development',
  'Customer Success'
]

const changedItem = ref(0)
const setActive = (index) => (changedItem.value = index)
const dropdownRef = ref(null)

const isOpen = ref(false)
const openDropdown = () => {
  isOpen.value = true
}
const chooseItem = (index) => {
  changedItem.value = index
  isOpen.value = false
}
useClickOutside(dropdownRef, () => {
  isOpen.value = false
})
</script>

<template>
  <div class="list-select">
    <ul class="list">
      <li
        v-for="(item, index) in activities"
        :key="index"
        :class="['list__item', { active: changedItem === index }]"
        @click="setActive(index)"
      >
        {{ item }}
      </li>
    </ul>

    <div ref="dropdownRef" class="select">
      <div class="select__changed" @click="openDropdown">
        {{ activities[changedItem] }}
      </div>
      <div
        class="select__dropdown"
        :class="{ open: isOpen }"
        @change="setActive($event.target.value)"
      >
        <div
          v-for="(item, index) in activities"
          :key="index"
          class="select__item"
          @click="chooseItem(index)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-select {
  padding: 25px 0 80px;

  .list {
    display: flex;
    gap: 20px;
    font-size: 16px;
    font-weight: 500;

    &__item {
      cursor: pointer;
    }
    &__item.active {
      font-weight: 700;
      text-decoration: underline;
      letter-spacing: -0.45px;
    }
  }
  .select {
    display: none;
  }
}
@media (max-width: 991px) {
  .list-select {
    padding: 2vw 0 6vw;
    .list {
      display: none;
    }
    .select {
      display: block;
      position: relative;

      &__changed {
        width: 250px;
        height: 35px;
        border: 1px solid $grey;
        border-radius: $radius-5;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &__dropdown {
        position: absolute;
        top: 0;
        left: 0;
        width: 90%;
        min-height: 35px;
        background: $white;
        border: 1px solid $grey;
        border-radius: $radius-5;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
        z-index: 10;
        opacity: 0;
        transform: translateX(20px);
        transition: all 0.3s ease-out;
        transform: translateY(-10px);
        pointer-events: none;
        transition:
          opacity 0.4s ease-in-out,
          transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      }
      &__dropdown.open {
        opacity: 1;
        transform: translateX(0);
        pointer-events: auto;
      }
      &__item {
        padding-left: 10%;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
@media (max-width: 640px) {
  .list-select {
    .select {
      &__dropdown.open {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
