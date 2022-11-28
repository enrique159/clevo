<template>
  <div class="default-layout">
    <SideBarMenu />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import SideBarMenu from '@/components/SideBarMenu/SideBarMenu.vue'
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: $color-white-1;
}
</style>