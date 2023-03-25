<template>
  <div class="signin-view">
    <SignInComp />
    <AnimatedBackground />
  </div>
  <AnimatedBackground />
</template>

<script setup lang="ts">
import AnimatedBackground from '../components/AnimatedBackground.vue'
import SignInComp from '../components/SignInComp.vue'
import { useMeta } from "vue-meta"

// Locales
import i18n from '@/plugins/i18n'
const { t } = i18n.global

// METADATA

useMeta({
  title: t('Titles.SignIn'),
  htmlAttrs: { lang: "en", amp: true },
})

// TAMAÑO DE LA PANTALLA
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty("--vh", `${vh}px`)
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
})
</script>

<style lang="scss" scoped>
.signin-view {
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  position: relative;
  background-color: $color-blue-0;
}
</style>