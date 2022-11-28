<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | Clevo` : `Clevo Facturación` }}</template>
  </metainfo>
  <router-view></router-view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
</style>
