<template>
  <div class="banner-comp">
    <div class="banner-comp__icon w-1">
      <img src="@/assets/announcement.png" alt="announcement" />
    </div>
    <div class="banner-comp__content w-100">
      <h6 class="ts-b1 tw-semi-bold tc-white-0 mb-2">{{ bannerValues.title }}</h6>
      <p class="tc-white-0 mb-2">{{ bannerValues.subtitle }}</p>
    </div>
    <Button class="button-custom bg-white-0 bc-white-0 tc-blue-0 br-4" style="width: 180px;">
      <span class="w-100 ta-center">{{ bannerValues.cta }}</span>
    </Button>

    <button class="banner-comp__button-close">
      <XIcon size="18" color="#fff" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const bannerValues = reactive({
  title: "¡Nueva promoción!",
  subtitle: "Compra un producto y llévate otro gratis",
  cta: "Ver promoción",
});
</script>

<style lang="scss" scoped>
.banner-comp {
  @include flex-between;
  width: 100%;
  height: 100px;
  background: rgb(64,37,227);
  background: linear-gradient(90deg, rgba(64,37,227,1) 0%, rgba(46,159,222,1) 100%);  
  border-radius: $border-radius-3;
  padding: 1rem 2rem 1rem 2rem;
  position: relative;

  &__button-close {
    @include flex-center;
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    z-index: $z-index-100;
    &:hover {
      background-color: rgba($color: $color-black-0, $alpha: 0.1);
    }
  }
}
</style>