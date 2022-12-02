<template>
  <div class="locale-switcher">
    <button
      class="locale-switcher__button"
      :class="{ 'locale-switcher__button--active': currentLocale === Locales.ES }"
      v-tooltip.bottom="{ value: $t('General.spanish'), class: 'z-100' }"
      @click="changeLocale(Locales.ES)"
    >
      ES
    </button>
    <div class="locale-switcher__divider"></div>
    <button
      class="locale-switcher__button"
      :class="{ 'locale-switcher__button--active': currentLocale === Locales.EN }"
      v-tooltip.bottom="{ value: $t('General.english'), class: 'z-100' }"
      @click="changeLocale(Locales.EN)"
    >
      EN
    </button>
  </div>
</template>

<script setup lang="ts">
import i18n from "@/plugins/i18n";
import { Locales } from "@/locales/locales.d";
import { computed } from "vue";

const changeLocale = (locale: Locales) => {
  i18n.global.locale = locale;
};

const currentLocale = computed(() => i18n.global.locale);
</script>

<style lang="scss" scoped>
.locale-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &__button {
    background-color: transparent;
    border: none;
    font-size: $b4-size;
    font-weight: $font-regular;
    color: $color-black-4;
    cursor: pointer;
    &:hover {
      color: $color-black-3;
    }
  }

  &__button--active {
    color: $color-black-3;
  }

  &__divider {
    width: 1px;
    height: 1.5rem;
    background-color: $color-white-4;
  }
}
</style>
