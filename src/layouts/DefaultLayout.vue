<template>
  <div class="default-layout">
    <SideBarMenu />
    <div class="w-100">
      <DefaultHeader />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBarMenu from '@/components/SideBarMenu/SideBarMenu.vue'
import DefaultHeader from '@/components/Headers/DefaultHeader.vue'
import { useApp } from "@/composables/stores/useApp";
import { useUser } from "@/composables/stores/useUser";

const { getRememberSession } = useApp();
const { logout } = useUser();

if(!getRememberSession()) {
  window.addEventListener('beforeunload', () => {
    logout();
  }, false)
}
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: $color-white-1;
}
</style>