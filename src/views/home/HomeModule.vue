<template>
  <div class="container">
    <HomeOptionsComp class="mb-3" />
  </div>
</template>

<script setup lang="ts">
import HomeOptionsComp from './components/HomeOptionsComp.vue'
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
