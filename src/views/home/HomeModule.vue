<template>
  <div class="container">
    <div class="d-flex justify-end my-4">
      <SearchBar :placeholder="$t('General.searchBarPlaceholder')"/>
      <Avatar size="large" label="EP" shape="circle" class="ml-4"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import { useMeta } from 'vue-meta'
// Define los metadatos de la página
useMeta({
  title: 'Inicio',
  htmlAttrs: { lang: 'en', amp: true }
})
</script>

<style lang="scss" scoped>
</style>