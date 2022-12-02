<template>
  <div class="container">
    <HeaderComp />
    <HomeOptionsComp />
    <BannerComp />
  </div>
</template>

<script setup lang="ts">
import HeaderComp from './components/HeaderComp.vue'
import HomeOptionsComp from './components/HomeOptionsComp.vue'
import BannerComp from './components/BannerComp.vue'
// Composables
import { useMeta } from "vue-meta";

// Define los metadatos de la página
useMeta({
  title: "Inicio",
  htmlAttrs: { lang: "en", amp: true },
})
</script>

<style lang="scss" scoped></style>
