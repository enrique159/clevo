<template>
  <metainfo>
    <template #title="{ content }">
      {{ content ? `${content} | Clevo` : `Clevo Facturación` }}
    </template>
  </metainfo>
  <router-view />
</template>

<script setup lang="ts">
import i18n from "@/plugins/i18n"
import { useApp } from "@/composables/stores/useApp"
import { Locales } from "@/locales/locales.d"

const { locale } = useApp()

if (locale.value === 'es-MX') {
  i18n.global.locale = Locales.ES
} else {
  i18n.global.locale = Locales.EN
}
</script>

<style lang="scss" scoped>
</style>
