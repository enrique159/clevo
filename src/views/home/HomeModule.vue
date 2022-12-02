<template>
  <div class="container">
    <div class="d-flex justify-end my-4">
      <SearchBar :placeholder="$t('General.searchBarPlaceholder')" />
      <Avatar
        id="avatar-profile"
        size="large"
        label="EP"
        shape="circle"
        class="ml-4 ff-primary lh-b5 avatar-outline-custom tran-normal"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_tmenu"
      />
      <TieredMenu
        id="overlay_tmenu"
        ref="avatarProfileMenu"
        class="tiered-menu-custom ff-primary"
        :model="items"
        :popup="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from "@/components/SearchBar/SearchBar.vue";
// Composables
import { useMeta } from "vue-meta";
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router';
import { useUser } from "@/composables/stores/useUser";
// Plugins
import i18n from '@/plugins/i18n';

// call useI18n() to get the global component instance
const { t } = i18n.global


// Define los metadatos de la página
useMeta({
  title: "Inicio",
  htmlAttrs: { lang: "en", amp: true },
});
const avatarProfileMenu = ref<any>(null);
const items = reactive([
  { label: t("General.myAccount"), icon: "pi pi-fw pi-file" },
  { separator: true },
  { label: t("General.signOut"), icon: "pi pi-fw pi-power-off", command: () => logoutUser() },
]);

const toggle = (event: any) => {
  avatarProfileMenu.value.toggle(event);
};


// CERRAR SESION
const { logout } = useUser();
const router = useRouter();
const logoutUser = async () => {
  await logout();
  router.push({ name: "Login" });
};
</script>

<style lang="scss" scoped></style>
