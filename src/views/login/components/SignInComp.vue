<template>
  <div class="signin-comp">
    <router-link to="#" class="signin-comp__logo">
      <img src="@/assets/logo.svg" alt="clevo" />
    </router-link>

    <div class="signin-comp__form">
      <h5>{{ $t("Login.SignIn.title") }}</h5>
      <p class="ts-b3 tw-regular">{{ $t("Login.SignIn.subtitle") }}</p>
      <form class="signin-form py-6">
        <span class="p-float-label mb-3">
          <InputText
            id="signInEmail"
            type="text"
            class="w-100 input-custom"
            v-model="user.email"
          />
          <label for="signInEmail">{{ $t("Login.SignIn.email") }}</label>
        </span>
        <span class="p-float-label mb-3">
          <Password
            id="signInPassword"
            v-model="user.password"
            class="w-100 password-custom"
            :feedback="false"
            toggleMask
          />
          <label for="signInPassword">{{ $t("Login.SignIn.password") }}</label>
        </span>
        <Button class="ta-center" type="submit">{{
          $t("Login.SignIn.signIn")
        }}</Button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const user = reactive({
  email: "",
  password: "",
});
</script>

<style lang="scss" scoped>
.signin-comp {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 50%;
  max-width: 560px;
  height: calc(100% - 3rem);
  background-color: rgba($color: #fff, $alpha: 0.7);
  border-radius: 26px;
  z-index: 100;
  padding: 3rem 5rem 3rem 3rem;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);

  &__logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    &:hover {
      transform: scale(1.04);
    }
  }

  &__form {
    width: 100%;
    max-width: 360px;
    height: fit-content;
    margin: 0 auto;
    padding: 16% 0 0 0;

    .signin-form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem 0 0;
      row-gap: 1rem;
    }
  }
}

@media screen and (max-width: $breakpoint-md) {
  .signin-comp {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 0;
  }
}
</style>
