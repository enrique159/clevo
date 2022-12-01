<template>
  <div class="login-module">
    <SignInComp />
  </div>
  <AnimatedBackground />
</template>

<script setup lang="ts">
import AnimatedBackground from './components/AnimatedBackground.vue'
import SignInComp from './components/SignInComp.vue'
</script>

<style lang="scss" scoped>
.login-module {
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: $color-blue-0;
}
</style>
