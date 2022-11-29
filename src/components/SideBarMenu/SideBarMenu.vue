<template>
  <div class="side-bar-menu">
    <router-link to="/" class="side-bar-menu__logo">
      <img src="@/assets/logo.svg" alt="clevo" />
    </router-link>
    <div class="side-bar-menu__menu">
      <ul>
        <li>
          <router-link to="/home" :class="{ active: menu.home }" @click="selectMenuOption('home')">
            <HomeIcon class="icon" :white="menu.home" />
            <span>{{ $t('SideBarMenu.home') }}</span>
          </router-link>
        </li>
        <li>
          <router-link to="/" :class="{ active: menu.bills }" @click="selectMenuOption('bills')">
            <BillsIcon class="icon" :white="menu.bills" />
            <span>{{ $t('SideBarMenu.bills') }}</span>
          </router-link>
        </li>
        <li>
          <router-link to="/" :class="{ active: menu.clients }" @click="selectMenuOption('clients')">
            <ClientsIcon class="icon" :white="menu.clients" />
            <span>{{ $t('SideBarMenu.clients') }}</span>
          </router-link>
        </li>
        <li>
          <router-link to="/" :class="{ active: menu.sales }" @click="selectMenuOption('sales')">
            <SalesIcon class="icon" :white="menu.sales" />
            <span>{{ $t('SideBarMenu.sales') }}</span>
          </router-link>
        </li>
        <li>
          <router-link to="/" :class="{ active: menu.coins }" @click="selectMenuOption('coins')">
            <CoinsIcon class="icon" :white="menu.coins" />
            <span>{{ $t('SideBarMenu.coins') }}</span>
          </router-link>
        </li>
        <li>
          <router-link to="/" :class="{ active: menu.settings }" @click="selectMenuOption('settings')">
            <SettingsIcon class="icon" :white="menu.settings" />
            <span>{{ $t('SideBarMenu.settings') }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeIcon from "@/assets/custom/HomeIcon.vue";
import BillsIcon from "@/assets/custom/BillsIcon.vue";
import ClientsIcon from "@/assets/custom/ClientsIcon.vue";
import SalesIcon from "@/assets/custom/SalesIcon.vue";
import CoinsIcon from "@/assets/custom/CoinsIcon.vue";
import SettingsIcon from "@/assets/custom/SettingsIcon.vue";
import { reactive } from "vue";

type options = 'home' | 'bills' | 'clients' | 'sales' | 'coins' | 'settings';

const menu = reactive({
  home: true,
  bills: false,
  clients: false,
  sales: false,
  coins: false,
  settings: false,
});

const selectMenuOption = (option: options) => {
  menu.home = false;
  menu.bills = false;
  menu.clients = false;
  menu.sales = false;
  menu.coins = false;
  menu.settings = false;
  menu[option] = true;
};

</script>

<style lang="scss" scoped>
.side-bar-menu {
  background-color: $color-white-0;
  width: 300px;
  height: 100%; 
  padding: 2rem 5rem 2rem 3rem;

  &__logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    &:hover {
      transform: scale(1.04);
    }
  }

  &__menu {
    margin-top: 6rem;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 1rem;

        a {
          display: flex;
          align-items: center;
          column-gap: 1rem;
          text-decoration: none;
          color: $color-text;
          font-size: $b2-size;
          font-weight: $font-medium;
          transition: $transition-normal;
          padding: 0.6rem 0.8rem;
          border-radius: $border-radius-4;
          cursor: default;

          &:hover {
            background-color: $color-white-2;
          }

          &.active {
            background-color: $color-blue-0;
            color: $color-white-0;
          }

          .icon {
            width: 24px;
          }
        }
      }
    }
  }
}
</style>