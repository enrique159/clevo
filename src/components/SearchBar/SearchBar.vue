<template>
  <div class="search-bar">
    <SearchIcon :size="18" color="#949CB8" class="mr-2" />
    <InputText class="search-bar__input" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
//eslint-disable-next-line
const { placeholder = "" } = defineProps<{
  placeholder?: string;
}>()
</script>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  max-width: 290px;
  padding: 12px 12px;
  background-color: $color-white-0;
  display: flex;
  align-items: center;
  box-shadow: $box-shadow-1;
  border-radius: $border-radius-3;
  transition: $transition-slow;

  &:focus-within {
    box-shadow: $box-shadow-2;
    max-width: 320px;
  }

  &__input {
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    background-color: transparent;
    font-family: $font-primary;
    font-size: $b3-size;
    font-weight: $font-regular;
    color: $color-text;

    &::placeholder {
      color: $color-white-3;
      font-weight: $font-medium;
    }

    &:focus {
      outline: none !important;
      border: none !important;
      box-shadow: none !important;
    }
  }
}

@media only screen and (max-width: $breakpoint-sm) {
  .search-bar {
    max-width: 200px;
    background-color: transparent;
    box-shadow: none;

    &:focus-within {
      box-shadow: none;
      background-color: $color-white-2;
      max-width: 220px;
    }
  }
}
</style>
