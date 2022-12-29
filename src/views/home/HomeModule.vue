<template>
  <div class="container">
    <HeaderComp />
    <HomeOptionsComp class="mb-3" />
    <BannerComp />
  </div>
</template>

<script setup lang="ts">
import HeaderComp from './components/HeaderComp.vue'
import HomeOptionsComp from './components/HomeOptionsComp.vue'
import BannerComp from './components/BannerComp.vue'
// Composables
import { useMeta } from "vue-meta";

// Locales
import i18n from '@/plugins/i18n';
const { t } = i18n.global;

// Define los metadatos de la página
useMeta({
  title: t('Titles.Home'),
  htmlAttrs: { lang: "en", amp: true },
})
</script>

<style lang="scss" scoped></style>
