<template>
  <div class="signin-comp">
    <div class="d-flex w-100 justify-between">
      <router-link
        to="#"
        class="signin-comp__logo"
      >
        <img src="@/assets/logo.svg" alt="clevo" />
      </router-link>

      <LocaleSwitcher />
    </div>

    <div class="signin-comp__form">
      <h5 class="mb-2 lh-b2">{{ $t("Login.SignIn.title") }}</h5>
      <p class="ts-b3 tw-regular mb-3">{{ $t("Login.SignIn.subtitle") }}</p>
      <form class="signin-form" @submit.prevent="onSubmit">
        <!-- EMAIL -->
        <span class="p-float-label">
          <InputText
            id="signInEmail"
            type="text"
            class="w-100 input-custom"
            :class="{ 'p-invalid': !emptyString(errorEmail) }"
            v-model="email"
          />
          <label for="signInEmail">{{ $t("Login.SignIn.email") }}</label>
        </span>
        <span class="tc-red-0 ts-b5 mb-5 pl-1">{{ $t(errorEmail) }}</span>

        <!-- PASSWORD -->
        <span class="p-float-label">
          <Password
            id="signInPassword"
            v-model="password"
            class="w-100 password-custom"
            :class="{ 'p-invalid bc-red-0': !emptyString(errorPassword) }"
            :feedback="false"
            toggleMask
            autocomplete="on"
          />
          <label for="signInPassword">{{ $t("Login.SignIn.password") }}</label>
        </span>
        <span class="tc-red-0 ts-b5 mb-5 pl-1">{{ $t(errorPassword, { min: passwordMinLength }) }}</span>

        <!-- REMEMBER CHECKER -->
        <div class="d-flex justify-between mb-1">
          <div class="field-checkbox">
            <Checkbox inputId="binary" v-model="remember" :binary="true" />
            <label for="binary">{{ $t("Login.SignIn.remember") }}</label>
          </div>

          <!-- FORGOT PASSWORD -->
          <router-link to="/forgot-password" class="ts-b3 tw-medium tc-blue-0">
            {{ $t("Login.SignIn.forgotPassword") }}
          </router-link>
        </div>

        <!-- LOGIN BUTTON -->
        <Button class="signin-form__button-login" type="submit" :loading="isLoading">
          <i v-if="isLoading" class="pi pi-spinner pi-spin mr-2"></i>
          <span>
            {{$t("Login.SignIn.signIn")}}
          </span>
        </Button>

        <!-- ERROR FETCHING -->
        <span class="ta-center ts-small tc-red-0">{{ $t(errorFetchResponse) }}</span>
      </form>
    </div>

    <!-- DON'T HAVE AN ACCOUNT -->
    <div class="dont-have-account w-100">
      <p class="ts-b3 tw-regular">
        {{ $t("Login.SignIn.dontHaveAccount") }}
      </p>
      <router-link to="/signup" class="ts-b3 tw-bold ml-1">
        {{ $t("Login.SignIn.signUp") }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher.vue";
import { emptyString } from "@/utils/emptyString";
// Composables
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useApp } from "@/composables/stores/useApp";
import { useUser } from "@/composables/stores/useUser";
import { useForm } from 'vee-validate';
import * as yup from 'yup';
// Types
import { Auth } from "@/app/auth/domain/interfaces";
import Exception from "@/app/shared/error/Exception";
import ErrorCode from "@/app/shared/error/errorCode";

// VALIDATION SCHEMA
const passwordMinLength = ref(8);
const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(passwordMinLength.value),
});

// VALIDATION FORM
const { useFieldModel, errors, meta, handleSubmit } = useForm({
  validationSchema: schema,
});
const [ email, password ] = useFieldModel(['email', 'password']);

// ERROR COMPUTED
const errorEmail = computed(() => {
  return meta.value.dirty && email.value != undefined ? errors.value.email ?? '' : '';
})
const errorPassword = computed(() => {
  return meta.value.dirty && password.value != undefined ? errors.value.password ?? '' : '';
})

// SUBMIT FORM
const onSubmit = handleSubmit((values) => {
  fetchSignIn();
})

/*
  ****** FETCHING SIGN IN ******
*/

const isLoading = ref(false);
const errorFetchResponse = ref("");
const { rememberSession, getRememberSession } = useApp();
const { signIn } = useUser();
const router = useRouter();

const remember = ref<boolean>(true)
remember.value = getRememberSession()

// FETCH SIGN IN
const fetchSignIn = async () => {
  const credentianls: Auth = {
    email: email.value,
    password: password.value,
  };

  errorFetchResponse.value = "";
  isLoading.value = true;
  // create a delay to show the loading
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await signIn(credentianls)
    .then((response) => {
      rememberSession.value = remember.value.toString();
      router.push({ name: "Home" })
    })
    .catch((error) => {
      if (error instanceof Exception) {
        for (let err of error.errors) {
          if (err.code === ErrorCode.ERR0001.code)
            errorFetchResponse.value = 'Login.SignIn.error.notFound';
          else if (err.code === ErrorCode.ERR0017.code)
            errorFetchResponse.value = 'Login.SignIn.error.invalidCredentials';
          else if (err.code === ErrorCode.ERR0000.code)
            errorFetchResponse.value = 'Error.interalServerError';
          else
            errorFetchResponse.value = 'Error.interalServerError';
        }
      } else {
        console.log(error);
        errorFetchResponse.value = 'Error.interalServerError';
      }
    })
    .finally(() => {
      isLoading.value = false;
    });
}
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
  padding: 3rem;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

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

    .signin-form {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem 0 0;
      //row-gap: 1rem;

      &__button-login {
        width: 100%;
        height: 48px;
        border-radius: $border-radius-3;
        background-color: $color-blue-0;
        border: 1px solid $color-blue-0;
        color: $color-white-0;
        font-family: $font-primary;
        font-weight: $font-medium;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1px;
        text-align: center;
        display: inline-block;
        &:hover {
          filter: saturate(1.1);
        }
      }
    }
  }
  .dont-have-account {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: $color-blue-0;
    }
  }
}

@media screen and (max-width: $breakpoint-md) {
  .signin-comp {
    background-color: rgba($color: #fff, $alpha: 0.5);
    width: 100%;
    max-width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 0;
    padding: 3rem 2.5rem;
  }
}
</style>
