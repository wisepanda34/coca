<!-- components/contact/Brand.vue -->
<script setup>
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref()
const message = ref('')
</script>

<template>
  <section class="brand">
    <div class="container">
      <div class="brand__wrapper">
        <form class="brand__form form">
          <h3 class="form__title">Let’s level up your brand</h3>
          <p class="form__descr">
            You can reach us anytime <span>hellosansbrothers@gmail.com</span>
          </p>
          <div class="form__inputs">
            <div class="form__input">
              <label for="name">First name</label>
              <input
                id="name"
                v-model.trim="firstName"
                placeholder="First name"
              />
            </div>
            <div class="form__input">
              <label for="surname">Last name</label>
              <input
                id="surname"
                v-model.trim="lastName"
                placeholder="Last name"
              />
            </div>
            <div class="form__input" style="grid-column: span 2">
              <label for="email">Email</label>
              <input
                id="email"
                v-model.trim="email"
                placeholder="you@company.com"
              />
            </div>
            <div class="form__input" style="grid-column: span 2">
              <label for="phone">Phone</label>
              <input id="phone" v-model.trim="phone" />
            </div>
            <div class="form__input" style="grid-column: span 2">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model.trim="message"
                placeholder="Leave us a message..."
              />
            </div>
          </div>
          <UIButton text="Get started" />
        </form>
        <div class="brand__picture">
          <NuxtImg src="/images/skyrocketing.png" aria-multiline="img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.brand {
  &__wrapper {
    position: relative;
    padding: 40px 0 180px;
  }
  &__picture {
    position: absolute;
    top: 40px;
    right: -110px;
    width: 987px;
    height: 885px;
    z-index: -1;
  }
  &__form {
    width: 608px;
    z-index: 2;
  }
  .form {
    padding: 56px 48px;
    border: 1px solid $grey-border;
    background: $white;

    &__title {
      font-size: 36px;
      font-weight: 700;
      line-height: 1.375;
    }
    &__descr {
      font-size: 18px;
      font-weight: 1.33;
      span {
        color: $blue-primary;
      }
    }
    &__inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      padding: 32px 0;
    }
    &__input {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      label {
        font-size: 14px;
        font-weight: 600;
        line-height: 1.43;
        padding-bottom: 5px;
      }
      input,
      textarea {
        width: auto;
        height: 44px;
        border: 1px solid $grey-border;
        border-radius: $radius-5;
        font-size: 14px;
        padding: 10px 10px;
      }
      textarea {
        height: 160px;
        resize: none;
      }
    }
  }
}
@media (max-width: 991px) {
  .brand {
    &__wrapper {
      padding: 4vw 0 6vw;
    }
    &__picture {
      display: none;
    }
    &__form {
      width: auto;
      max-width: 608px;
      margin: 0 auto;
    }
  }
}
@media (max-width: 600px) {
  .brand {
    .form {
      padding: 30px 10px;
      &__title {
        font-size: 18px;
      }
      &__descr {
        font-size: 14px;
      }
      &__inputs {
        display: flex;
        flex-direction: column;
        gap: 25px;
      }
    }
  }
}
</style>
