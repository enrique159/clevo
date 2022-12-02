<template>
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
      defaultActiveItem="#"
      :model="[
        { label: $t('General.myAccount'), icon: 'pi pi-fw pi-user', command: () => { }, },
        { label: $t('General.signOut'), icon: 'pi pi-fw pi-sign-out', command: () => logoutUser(), },
      ]"
      :popup="true"
    />
  </div>
</template>

<script setup lang="ts">
import SearchBar from "@/components/SearchBar/SearchBar.vue";
// Composables
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { useUser } from "@/composables/stores/useUser";
// // Plugins
// import i18n from '@/plugins/i18n';
// // call useI18n() to get the global component instance
// const { t } = i18n.global

const avatarProfileMenu = ref<any>(null);

const toggle = (event: any) => {
  avatarProfileMenu.value.toggle(event);
};

// CERRAR SESION
const { logout } = useUser();

const router = useRouter();

const logoutUser = () => {
  logout();
  router.push({ name: "Login" });
};

</script>
