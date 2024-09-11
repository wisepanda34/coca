<!-- components/contact/Map.vue -->
<script setup>
import IconMap from '../global/IconMap.vue'

const representations = [
  {
    support: 'support@sans.com',
    sales: 'sales@sans.com',
    schedule: 'Mon-Fri from 8am to 5pm.',
    phone: '+1 (435) 345-7655'
  },
  {
    support: 'support@sans.com',
    sales: 'sales@sans.com',
    schedule: 'Mon-Fri from 8am to 5pm.',
    phone: '+1 (435) 345-7655'
  }
]
</script>

<template>
  <section class="map">
    <div class="container">
      <div class="map__wrapper">
        <h1 class="title-h1">Contact our team to find out more</h1>
        <div class="map__block">
          <div class="map__world">
            <IconMap />
          </div>
          <ul class="map__info">
            <li class="map__info_item">
              <h5 class="map__info_title">Support</h5>
              <p class="map__info_descr">Our friendly team is here to help.</p>
              <p class="map__info_contact">{{ representations[0].support }}</p>
            </li>
            <li class="map__info_item">
              <h5 class="map__info_title">Sales</h5>
              <p class="map__info_descr">Questions or queries? Get in touch!</p>
              <p class="map__info_contact">{{ representations[0].sales }}</p>
            </li>
            <li class="map__info_item">
              <h5 class="map__info_title">Phone</h5>
              <p class="map__info_descr">{{ representations[0].schedule }}</p>
              <p class="map__info_contact">{{ representations[0].phone }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.map {
  &__wrapper {
    padding: 50px 0;
  }
  &__block {
    display: grid;
    grid-template-columns: auto 176px;
    gap: 80px;
  }
  &__world {
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &_item {
      padding: 10px 0 15px;
      border-bottom: 1px solid $grey-text-2;
    }
    &_title {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.33;
    }
    &_descr {
      font-size: 16px;
      line-height: 1.5;
      color: $grey-text-2;
    }
    &_contact {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.625;
      margin-top: 10px;
      user-select: text;
    }
  }
}
@media (max-width: 991px) {
  .map {
    &__wrapper {
      padding: 5vw 0;
    }
    &__block {
      grid-template-columns: 1fr;
      gap: 5vw;
    }
    &__info {
      flex-direction: row;
      gap: 20px;
      flex-wrap: wrap;

      &_item {
        width: 176px;
        border-bottom: none;
      }
    }
  }
}
</style>
