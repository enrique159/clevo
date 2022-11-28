<template>
  <div class="container">
    <h4 class="">Home Module {{ $t('General.continue') }}</h4>
  </div>
</template>

<script setup lang="ts">
import { useMeta } from 'vue-meta'

// Define los metadatos de la página
useMeta({
  title: 'Inicio',
  htmlAttrs: { lang: 'en', amp: true }
})
</script>

<style lang="scss" scoped>
</style>