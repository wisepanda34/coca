<!-- Lift.vue -->
<script setup></script>

<template>
  <section class="lift">
    <div class="container">
      <div class="lift__wrapper">
        <div class="lift__achiviment">
          <TheCounter
            class="lift__achiviment-block"
            text="Happy customers on worldwide"
            :end-value="17"
            symbol="k"
            :update-time="40"
          />
          <div class="lift__achiviment-devider" />
          <TheCounter
            class="lift__achiviment-block"
            text="Hours of work experience"
            :end-value="15"
            :update-time="40"
          />
          <div class="lift__achiviment-devider delete" />
          <TheCounter
            class="lift__achiviment-block"
            text="Creativity & passionate members"
            :end-value="50"
            :increment="2"
          />
          <div class="lift__achiviment-devider" />
          <TheCounter
            class="lift__achiviment-block"
            text="Integrations lorem ipsum integrations"
            :end-value="100"
            :increment="3"
          />
        </div>

        <div class="lift__image">
          <img src="/images/lift.png" alt="lift/png" />
        </div>

        <div class="lift__content">
          <h3 class="title-h3">
            Lift your business to new heights with our digital marketing
            services
          </h3>
          <p class="motto">
            To build software that gives customer facing teams in small and
            medium-sized businesses the ability to create rewarding and
            long-lasting relationships with customers
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.lift {
  &__wrapper {
    padding: 66px 0;
  }
  &__achiviment {
    padding-left: 4vw;
    display: grid;
    grid-template-columns: 1fr 0.3fr 1fr 0.3fr 1fr 0.3fr 1fr;

    color: $grey-text-2;

    &-block {
      width: 190px;
    }
    &-devider {
      width: 1px;
      height: 66px;
      background: $grey-border;
      margin: 41px 0 0 10px;
    }
  }
  &__image {
    padding: 8vw 0;

    img {
      width: 100%;
      box-shadow: $shadow-1;
    }
  }
  &__content {
    display: grid;
    grid-template-columns: 1.8fr 1.3fr;
    column-gap: 4vw;
  }
}
@media (max-width: 1179px) {
  .lift {
    &__achiviment {
      grid-template-columns: 1fr 0.2fr 1fr 0.2fr 1fr 0.2fr 1fr;
    }
  }
}
@media (max-width: 991px) {
  .lift {
    &__wrapper {
      padding: 50px 0;
    }
    &__achiviment {
      grid-template-columns: 1.4fr 0.3fr 1fr;
      row-gap: 6vw;
      &-block {
        width: auto;
        max-width: 300px;
      }
      .delete {
        display: none;
      }
    }
    &__content {
      grid-template-columns: 1fr;
      row-gap: 3vw;
    }
  }
}
</style>
